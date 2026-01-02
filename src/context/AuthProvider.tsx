import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/auth';
import { LoginService, LogoutService } from "../services/authService";
import { AuthContext } from "./AuthContext";
import type { AuthUser } from "../types/auth";

export const AuthProvider=({children}:{children:React.ReactNode})=>{
    const [user,setUser]=useState<AuthUser|null>(null);
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(firebaseUser)=>{
            setUser(firebaseUser?{uid:firebaseUser.uid,email:firebaseUser.email}:null)
            setLoading(false)
        })
        return unsub
    },[])
    const login = async (email:string,password:string)=>{
        await LoginService(email,password)
    }
    const logout= async ()=>{
        await LogoutService()
    }    
    return (
        <AuthContext.Provider value={{user,loading,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}