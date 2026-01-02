import { getStorage } from "firebase/storage"
import { firebaseApp } from "./firebase.config"
console.log('firebase/storage')
export const storage = getStorage(firebaseApp)
