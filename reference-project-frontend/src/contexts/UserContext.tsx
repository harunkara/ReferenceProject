import { createContext, ReactNode, useState } from "react";
import { IUserModel } from "../models/IUserModel";
interface IUserContext {
  user: IUserModel;
  setUser: (user: IUserModel) => void;
}
export const UserContext = createContext<IUserContext>({
  user: {
    username: "",
    password: "",
  },
  setUser: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const tempUser =
    localStorage.getItem("user") ||
    JSON.stringify({
      username: "",
      password: "",
    });
  const [user, setUser] = useState(JSON.parse(tempUser));

  const setUserFunc = (user: IUserModel) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const userContextValue = {
    setUser: setUserFunc,
    user: user,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
