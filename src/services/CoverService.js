import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
export const getCovers = async () => {
  const col = collection(db, "covers");
  return await getDocs(col);
};
