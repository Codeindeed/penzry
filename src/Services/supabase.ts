import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbeyhqznwwtkgabohtat.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZXlocXpud3d0a2dhYm9odGF0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzIwNTk5MywiZXhwIjoyMDEyNzgxOTkzfQ.yg2Y0PFZNQdqKDc3spYElOzr4Qr7TV9PF9qgdb0NNdE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
