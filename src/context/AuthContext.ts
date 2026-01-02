import type { AuthUser } from "../types/auth";
import { createContext } from "react";

interface AuthContextType{
    user:AuthUser | null,
    loading:boolean,
    login:(email:string,password:string)=>Promise<void>
    logout:()=>Promise<void>
}

export const AuthContext = createContext<AuthContextType|undefined>(undefined)