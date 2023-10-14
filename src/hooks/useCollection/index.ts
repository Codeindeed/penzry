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

function useCollection() {
  const project = async (
    datas: any,
    type: string,
    nftData?: nftData,
    projectID?: number
  ) => {
    let post;
    if (type === "project") {
      const { data } = await axios.post("/projects", {
        name: datas?.feedback_title,
        symbol: "PENZRY",
        description: datas?.feedback_description,
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      });
      post = data;
      console.log(post);
    }
    if (type === "nft") {
      post = await axios.post(`/projects/${projectID}/nfts`, {
        attributes: {
          audio: nftData?.attributes?.audio,
          email: nftData?.attributes?.email,
          points: nftData?.attributes?.points,
          ...datas?.attributes,
        },
        name: nftData?.name,
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      });
    }
    return post;
  };
  return { project };
}

export default useCollection;
