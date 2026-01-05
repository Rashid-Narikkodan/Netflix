import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/auth';
import { LoginService, LogoutService, SignUpService } from "../services/auth.service";
import { AuthContext } from "./AuthContext";
import type { AuthUser } from "../types/auth";
import { validateCredentials } from "../utils/validateCredentials";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(
        firebaseUser
          ? { uid: firebaseUser.uid, email: firebaseUser.email }
          : null
      );
      setLoading(false);
    });
    return unsub;
  }, []);

  const login = async (email: string, password: string) => {
   const validated=validateCredentials(email,password)
    await LoginService(validated.email,validated.password);
  };

  const signup = async (email: string, password: string) => {
    const validated = validateCredentials(email, password);
    await SignUpService(validated.email, validated.password);
  };

  const logout = async () => {
    await LogoutService();
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
