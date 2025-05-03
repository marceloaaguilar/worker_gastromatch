import AuthContext from "../context/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

