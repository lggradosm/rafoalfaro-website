import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { projects } from "../utils/Projects";
const api_server_url = import.meta.env.VITE_API_SERVER

export const getLastProjects = () => {
  // const data = await fetch(`${api_server_url }/projects/last`)
  const data = projects.slice(-6)
  // return await data.json()
  return data
};

export const getProjectsGallery = async () => {
  // const data = await fetch(`${api_server_url }/projects/1`)
  const data = projects
  // return await data.json()
  return data
};


export const getProjectsPagination = async (page) => {

  const data = await fetch(`${api_server_url }/projects/${page}`)
  return await data.json()
};

export const getCover = async () => {
  const q = query(collection(db, "projects_cover"));
  return await getDocs(q);
};

export const getProjectByUrl = (url) => {
  // const data = await fetch(`${api_server_url}/projects/search?url=${url}`)
  // return await data.json()
  const project = projects.filter(p=> p.url === url)
  console.log(project[0])
  return project[0]
};
