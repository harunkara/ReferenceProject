import { createContext, ReactNode, useState } from "react";
import { IUserModel } from "../models/IUserModel";
interface IUserContext {
  user: IUserModel;
  jwt: string | null;
  setUser: (user: IUserModel) => void;
  setJwt: (jwt: string) => void;
}
export const UserContext = createContext<IUserContext>({
  user: {
    username: "",
    password: "",
  },
  jwt: null,
  setUser: () => {},
  setJwt: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const tempUser =
    localStorage.getItem("user") ||
    JSON.stringify({
      username: "",
      password: "",
    });
  const tempJwt = localStorage.getItem("jwt");
  const [user, setUser] = useState(JSON.parse(tempUser));
  const [jwt, setJwt] = useState(tempJwt);

  const setUserFunc = (user: IUserModel) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const setJwtFunc = (jwt: string) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    setJwt(jwt);
  };

  const userContextValue = {
    setUser: setUserFunc,
    user: user,
    setJwt: setJwtFunc,
    jwt: jwt,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
