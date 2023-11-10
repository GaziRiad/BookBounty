import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vfoukwuafhwcgaassnbe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmb3Vrd3VhZmh3Y2dhYXNzbmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1MTk2OTgsImV4cCI6MjAxNTA5NTY5OH0.QOazgQAKoBMg-sWliO_27pffJjgJ04fGh-gWMpfi1ps";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
