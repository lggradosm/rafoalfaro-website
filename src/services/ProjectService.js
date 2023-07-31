import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
export const getLastProjects = async () => {
  const col = collection(db, "projects");
  const q = query(col, orderBy("created_at", "desc"), limit(6));
  return await getDocs(q);
};

export const getProjectsGallery = async () => {
  const col = collection(db, "projects");
  const q = query(col, orderBy("created_at", "desc"), limit(10));
  return await getDocs(q);
};

export const getCover = async () => {
  const col = collection(db, "projects_cover");
  const q = query(col);
  return await getDocs(q);
};

export const getProjectByUrl = async (url) => {
  const col = collection(db, "projects");
  const q = query(col, limit(1), where("url", "==", url));
  return await getDocs(q);
};
