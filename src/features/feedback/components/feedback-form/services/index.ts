import { useState } from "react";
import { updateProject as updateUserProject } from "../../../../../Services/createUser";
import useCollection from "../../../../../hooks/useCollection";

interface feedbacks {
  feedback_title: string;
  feedback_description: string;
  feedback_questions: [];
}

function useUploadform() {
  const [status, setStatus] = useState<string>("");
  const { project } = useCollection();
 
  const upload = async (feedbacks: any) => {
    setStatus("loading");
    const post: any = await project(
      {
        feedback_description: feedbacks.feedback_description,
        feedback_title: feedbacks.feedback_title,
      },
      "project"
    );
    if (!post) {
      setStatus("idle");
      return status;
    }
    if (post) {
      const response = await updateUserProject(
        {
          ...feedbacks,
          projectId: post?.projectId,
          offer: {},
        },
        { profile: "alex" }
      );
      if (response) {
        setStatus("done");
      }
      return status;
    }
  };
  return { upload, status };
}

export default useUploadform;
