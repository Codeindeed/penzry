import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://frxxoloswoofvavmamxw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZXlocXpud3d0a2dhYm9odGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMDU5OTMsImV4cCI6MjAxMjc4MTk5M30.Zqd1M8cqL_zugLbAmGmVIsrulxvtXC9DouOkn_WkNtk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
