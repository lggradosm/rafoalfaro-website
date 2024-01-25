import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";
const api_server_url = import.meta.env.VITE_API_SERVER
export const getLastProjects = async () => {
  const data = await fetch(`${api_server_url }/projects/last`)
  return await data.json()
};

export const getProjectsGallery = async () => {
  const data = await fetch(`${api_server_url }/projects/1`)
  return await data.json()
};
export const getProjectsPagination = async (page) => {
  const data = await fetch(`${api_server_url }/projects/${page}`)
  return await data.json()
};

export const getCover = async () => {
  const q = query(collection(db, "projects_cover"));
  return await getDocs(q);
};

export const getProjectByUrl = async (url) => {
  const data = await fetch(`${api_server_url}/projects/search?url=${url}`)
  // console.log(await data.json())
  return await data.json()
};
