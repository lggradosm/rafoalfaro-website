import { useEffect, useState } from "react";
import { getProjectByUrl } from "../services/ProjectService";
const useGetProjectByIdFetch = (url) => {
  const [project, setProject] = useState(null);

  const getProjectByIdFecth = () => {
    getProjectByUrl(url).then((snapshot) => {
      const projectData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProject(projectData[0]);
    });
  };

  useEffect(getProjectByIdFecth, []);
  return { project };
};
export default useGetProjectByIdFetch;
