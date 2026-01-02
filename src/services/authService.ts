import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/auth";

export const LoginService=(email:string, password:string)=>{
    signInWithEmailAndPassword( auth, email, password)
}
export const SignUpService=(email:string, password:string)=>{
    createUserWithEmailAndPassword( auth, email, password)
}
export const LogoutService=()=>{
    signOut(auth)
}