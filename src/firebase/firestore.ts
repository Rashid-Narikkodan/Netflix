import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebase.config";
console.log('firebase/db')
export const db = getFirestore(firebaseApp)