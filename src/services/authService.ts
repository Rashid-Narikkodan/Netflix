import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/auth";

export const LoginService=(email:string, password:string)=>{
    signInWithEmailAndPassword( auth, email, password)
}
export const LogoutService=()=>{
    signOut(auth)
}