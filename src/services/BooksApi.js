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
