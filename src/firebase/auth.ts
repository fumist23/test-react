import { getAuth as getFirebaseAuth } from "firebase/auth";
import { getApp } from "./app";

export const getAuth = () => {
  const app = getApp();
  const auth = getFirebaseAuth(app);
  return auth;
};
