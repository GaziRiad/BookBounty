import supabase, { supabaseUrl } from "./supabase";

export async function getAdmins({ page, pageSize }) {
  let query = supabase.from("Admins").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Error loading admins");

  return { data, count };
}
