import { useContext } from "react"
import type { AuthUser } from "../types/auth";
import { createContext } from "react";

interface AuthContextType{
    user:AuthUser | null,
    isLoading:boolean,
    signup:(email:string,password:string,confirmPassword:string)=>Promise<void>,
    login:(email:string,password:string)=>Promise<void>
    logout:()=>Promise<void>
}

export const AuthContext = createContext<AuthContextType|undefined>(undefined)


export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error("useAuthContext must be used inside AuthProvider")
  }
  return ctx
}
