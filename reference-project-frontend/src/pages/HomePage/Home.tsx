import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import RegisterPage from "../RegisterPage/Register";
import LoginPage from "../LoginPage/Login";

const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return user.username ? (
    <div>Welcome {user.username}</div>
  ) : (
    <div>
      <RegisterPage />
      <LoginPage />
    </div>
  );
};

export default HomePage;
