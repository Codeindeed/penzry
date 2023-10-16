import axios from "../../../../../Services/axios";

function useMint() {
  const project = async (projectID: any) => {
    // const info = await uploadAudio(file);
    // if (info === null) {
    //   return null;
    // }
    const number = Number(projectID)
    const { data } = await axios.post(`/projects/${number}/nfts`, {
      attributes: {
        audio:
          "https://kbeyhqznwwtkgabohtat.supabase.co/storage/v1/object/public/audioBucket/newaudio/1e6b315a-3231-4f08-b356-ea76ce6e6eda.webm?t=2023-10-15T15%3A02%3A33.350Z",
        email: "alex@gmail.com",
        points: "30",
        taste: "50",
        customerService: "10",
      },
      name: "Mr Biggs Feedback",
      image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    });
    return data;
  };

  return { project };
}

export default useMint;
