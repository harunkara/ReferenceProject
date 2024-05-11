import { ChangeEvent, useState } from "react";
import CharounInput from "../../components/form/CharounInput";
import CharounButton from "../../components/ui/CharounButton";
import CharounContainer from "../../components/ui/CharounContainer";
import "./styles.module.css";
import { sendLoginRequest } from "../../services/LoginPage/LoginPageRequests";
import { useLocalize } from "../../hooks/useLocalize";
import { StringCases } from "../../utils/Cases";

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
