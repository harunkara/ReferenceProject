import { ChangeEvent, useState } from "react";
import CharounInput from "../../components/form/CharounInput";
import CharounButton from "../../components/ui/CharounButton";
import CharounContainer from "../../components/ui/CharounContainer";
import "./styles.module.css";
import { sendLoginRequest } from "../../services/LoginPage/LoginPageRequests";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async () => {
    const response = await sendLoginRequest({ username, password });
    console.log(response);
  };
  return (
    <>
      <CharounContainer>
        <CharounInput
          placeholder="Username"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        ></CharounInput>
        <CharounInput
          type="password"
          placeholder="Password"
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
