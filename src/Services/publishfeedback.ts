import supabase from "./supabase";

async function publishfeedback() {
  let { data: penzryTable, error } = await supabase
    .from("penzryTable")
    .select("id");
  if (error) {
    throw new Error(`${error.message}`);
  }
  console.log(penzryTable);

  return penzryTable;
}

export default publishfeedback;
