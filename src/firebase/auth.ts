import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase.config";
console.log('firebase/auth')
export const auth=getAuth(firebaseApp)