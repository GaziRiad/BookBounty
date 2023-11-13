import supabase from "./supabase";

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Error trying to login.");
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return user.user;
}

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  // After creating a new Admin adding to admin table
  const { data: adminData, error: adminError } = await supabase
    .from("Admins")
    .insert([{ fullName, email, avatar: "", phoneNumber: "" }]);
  if (adminError) throw new Error("Error adding admin.");

  return { data, adminData };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Error login out");
}
