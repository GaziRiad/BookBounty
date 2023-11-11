import supabase, { supabaseUrl } from "./supabase";

export async function uploadBook(book) {
  const imageName = `book-${Math.random()}-${book.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/book-images/${imageName}`;

  const { data: bookData, error: bookError } = await supabase
    .from("Books")
    .insert([{ ...book, image: imagePath }]);
  if (bookError) throw new Error("Error uploading book.");

  // Uploading img
  const { data, error } = await supabase.storage
    .from("book-images")
    .upload(imageName, book.image);

  if (error) {
    await supabase.from("Books").delete().eq("id", bookData.id);
  }

  return { bookData, data };
}

export async function getBooks({ page, pageSize }) {
  let query = supabase.from("Books").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Error loading books");

  return { data, count };
}

export async function deleteBook(id) {
  const { error } = await supabase.from("Books").delete().eq("id", id);
  if (error) throw new Error("Error deleting book");
}
