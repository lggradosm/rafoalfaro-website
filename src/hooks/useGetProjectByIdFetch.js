import { useEffect, useState } from "react";
import { getProjectByUrl } from "../services/ProjectService";
const useGetProjectByIdFetch = (url) => {
  const [project, setProject] = useState(null);

  const getProjectByIdFecth = () => {
    getProjectByUrl(url).then((snapshot) => {
      const projectData = snapshot
      setProject(projectData);
    });
  };

  useEffect(getProjectByIdFecth, []);
  return { project };
};
export default useGetProjectByIdFetch;
