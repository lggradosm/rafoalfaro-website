import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
export const getCovers = async () => {
  const col = collection(db, "covers");
  const data = await getDocs(col)
  return data;
};
