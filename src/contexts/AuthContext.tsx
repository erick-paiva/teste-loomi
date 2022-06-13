import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { User } from "../@types";
import { api } from "../services/api";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const history = useHistory();
  const toast = useToast();
  const [dataUser, setData] = useState<AuthState>(() => {
    const accessToken = cookies.accessToken;
    const user = localStorage.getItem("@Loomi:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });
    const user = await api.get("/me");

    const accessToken = response.data["access-token"];
    if (accessToken) {
      history.push("/dashboard");
    }
    setCookie("accessToken", accessToken, {
      maxAge: 86400,
    });

    localStorage.setItem("@Loomi:user", JSON.stringify(user.data));
    setData({ accessToken, user: user.data });

    toast({
      title: "Bem vindo!",
      description: `Bem vindo ${user.data.name}`,
      status: "success",
      duration: 4000,
      position: "top-right",
      isClosable: true,
    });
  }, []);

  const signOut = useCallback(() => {
    removeCookie("accessToken");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: dataUser.accessToken,
        user: dataUser.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
