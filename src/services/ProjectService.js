import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  startAt,
  endAt,
  where,
  startAfter,
} from "firebase/firestore";
import { db } from "../config/firebase";
const col = collection(db, "projects");
const initialAmountProjects = 10;
export const getLastProjects = async () => {
  const q = query(col, orderBy("created_at", "desc"), limit(6));
  return await getDocs(q);
};

export const getProjectsGallery = async () => {
  const q = query(
    col,
    orderBy("created_at", "desc"),
    limit(initialAmountProjects)
  );
  return await getDocs(q);
};

export const getProjectsPagination = async (project) => {
  const amount = 5;
  const q = query(
    col,
    orderBy("created_at", "desc"),
    startAfter(project.created_at),
    limit(amount)
  );
  return await getDocs(q);
};

export const getCover = async () => {
  const q = query(collection(db, "projects_cover"));
  return await getDocs(q);
};

export const getProjectByUrl = async (url) => {
  const q = query(col, limit(1), where("url", "==", url));
  return await getDocs(q);
};
