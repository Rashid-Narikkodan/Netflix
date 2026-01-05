import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/auth";

// Added 'return' so the component can 'await' the result
export const LoginService = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const SignUpService = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const LogoutService = async () => {
    return await signOut(auth);
};