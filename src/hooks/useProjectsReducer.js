import { useDispatch, useSelector } from "react-redux";
import { init, selectProjects } from "../app/reducers/projectsSlice";
import {  useState } from "react";
import {
  getProjectsGallery,
  getProjectsPagination,
} from "../services/ProjectService";
export default function useProjectReducer() {
  const projects = useSelector(selectProjects);
  const [finished, setFinished] = useState(false);
  const dispatch = useDispatch();

  const getProjects = async () => {
    const snapshot = await getProjectsGallery();
    const data = snapshot
    dispatch(init(data));
    setFinished(true);
  };

  const nextProjectPage = (page) => {
    getProjectsPagination(page).then((snapshot) => {
      const data = snapshot
      dispatch(init([...projects, ...data]));
    });
  };

  return { projects, finished, getProjects, nextProjectPage };
}
