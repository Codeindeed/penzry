import supabase from "./supabase";
interface User {
  profile: string;
  feedBacks?: number[];
  email?: string;
}
async function createUSer(user: User) {
  const { data, error } = await supabase
    .from("penzryTable")
    .insert([{ profile: user.profile, feedBacks: [], email: user.email }])
    .select();
  if (error) {
    throw new Error(`${error.message}`);
  }
  return data;
}

async function updateProject(projectid: number, user: User) {
  const { data: projectI, error: projectError } = await supabase
    .from("penzryTable")
    .select("*")
    .eq("profile", user.profile);

  if (projectError) {
    throw new Error(`${projectError.message}`);
  }

  if (!projectI || !projectI[0]) {
    throw new Error("Project not found");
  }
  const { error } = await supabase
    .from("penzryTable")
    .update({ projectIds: [...projectI[0].projectIds, projectid] })
    .eq("profile", user.profile);

  if (error) {
    throw new Error(`${error.message}`);
  }
  return projectI;
}
export { createUSer, updateProject };
