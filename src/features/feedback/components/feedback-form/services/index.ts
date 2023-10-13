import { useState } from "react";
import useCollection from "../../../../../hooks/useCollection";

function useUploadform() {
  
  const post = useCollection(
    {
      description: {},
    },
    "project"
  );

  const [form, setForm] = useState({
    name: "",
    image: "",
    audio: "",
    email: "",
    points: "",
  });
}
