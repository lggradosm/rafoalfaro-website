import { useEffect, useState } from "react";
import {
  getProjectsGallery,
  getProjectsPagination,
} from "../services/ProjectService";
export default function useProjectFetch() {
  const [projects, setProjects] = useState([]);
  const [finished, setFinished] = useState(false);
  const getProjects = () => {
    return getProjectsGallery().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(data);
    });
  };

  const nextProjectPage = (page) => {
    getProjectsPagination(page).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects([...projects, ...data]);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);
  return { projects, nextProjectPage };
}
