import { ChangeEvent, useState } from "react";
import CharounInput from "../../components/form/CharounInput";
import CharounContainer from "../../components/ui/CharounContainer";
import { useLocalize } from "../../hooks/useLocalize";
import { StringCases } from "../../utils/Cases";
import CharounButton from "../../components/ui/CharounButton";
import { sendRegisterRequest } from "../../services/RegisterPage/RegisterPageRequests";

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    const response = await sendRegisterRequest({ username, password });
    console.log(response);
  };

  return (
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
      <CharounButton
        buttonText="Register"
        onClick={handleRegister}
      ></CharounButton>
    </CharounContainer>
  );
};

export default RegisterPage;
