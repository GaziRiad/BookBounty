import supabase from "./supabase";

export async function getAdmins() {
  const { data, error } = await supabase.auth.listUsers();

  if (error) throw new Error("Error loading admins.");
  console.log(data);
  return data;
}
