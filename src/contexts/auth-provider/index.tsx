import { createContext, useState } from "react";
import { ReactNode, Dispatch, SetStateAction } from "react";

interface AuthProps {
  children: ReactNode;
}

interface AuthContextProps {
  email: string;
  isloggedin: boolean;
  isloggedout: boolean;
  accessToken: string;
  role: string;
}

interface AuthContextValue {
  auth: AuthContextProps;
  setAuth: Dispatch<SetStateAction<AuthContextProps>>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProps) => {
  const [auth, setAuth] = useState<AuthContextProps>({
    email: "",
    isloggedin: false,
    isloggedout: false,
    accessToken: "",
    role: "",
  });

  const contextValue: AuthContextValue = {
    auth,
    setAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
