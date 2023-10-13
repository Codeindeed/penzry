import axios from "../../Services/axios";
interface nftData {
  name: string;
  image?: string;
  attributes: {
    audio: string;
    email: string;
    points: string;
  };
}

async function useCollection(
  data: any,
  type: string,
  nftData?: nftData,
  projectID?: number
) {
  let post;
  if (type === "project") {
    post = await axios.post("/projects", {
      ...data?.description,
    });
  }
  if (type === "nft") {
    post = await axios.post(`/projects/${projectID}/nfts`, {
      attributes: {
        audio: nftData?.attributes?.audio,
        email: nftData?.attributes?.email,
        points: nftData?.attributes?.points,
        ...data?.attributes,
      },
      name: nftData?.name,
      image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    });
  }

  return post;
}

export default useCollection;
