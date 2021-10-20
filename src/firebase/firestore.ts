import { getFirestore as getFirebaseFirestore } from "firebase/firestore";
import { getApp } from "./app";

export const getFirestore = () => {
  const app = getApp();

  const firestore = getFirebaseFirestore(app);

  return firestore;
};
