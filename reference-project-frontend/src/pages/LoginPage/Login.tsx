import { ChangeEvent, useContext, useState } from "react";
import CharounInput from "../../components/form/CharounInput";
import CharounButton from "../../components/ui/CharounButton";
import CharounContainer from "../../components/ui/CharounCard";
import "./styles.module.css";
import { sendLoginRequest } from "../../services/LoginPage/LoginPageRequests";
import { useLocalize } from "../../hooks/useLocalize";
import { StringCases } from "../../utils/Cases";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import callNotification from "../../components/ui/CharounNotification";
import { AxiosError } from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser, setJwt } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userNotFoundMessage = useLocalize("userNotFound");
  const handleLogin = async () => {
    if (username === "" || password === "") {
      callNotification("error", userNotFoundMessage);
      return;
    }
    try {
      const response = await sendLoginRequest({ username, password });
      if (response.data.user) {
        setUser(response.data.user);
        setJwt(response.data.jwt);
        navigate("/");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      callNotification(
        "error",
        axiosError!.response!.data!.message || "An unexpected error occurred."
      );
      console.log("ERROR:", error);
    }
  };
  return (
    <>
      <CharounContainer title="Login">
        <CharounInput
          placeholder={useLocalize("username", StringCases["Title Case"])}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        ></CharounInput>
        <CharounInput
          type="password"
          placeholder={useLocalize("password", StringCases["Title Case"])}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        ></CharounInput>
        <CharounButton buttonText="Login" onClick={handleLogin}></CharounButton>
      </CharounContainer>
    </>
  );
};
export default LoginPage;
