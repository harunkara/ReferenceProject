import { ChangeEvent, useContext, useState } from "react";
import CharounInput from "../../components/form/CharounInput";
import CharounContainer from "../../components/ui/CharounContainer";
import { StringCases } from "../../utils/Cases";
import CharounButton from "../../components/ui/CharounButton";
import { sendRegisterRequest } from "../../services/RegisterPage/RegisterPageRequests";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import callNotification from "../../components/ui/CharounNotification";
import { useLocalize } from "../../hooks/useLocalize";
import { AxiosError } from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser, setJwt } = useContext(UserContext);
  const unknownExceptionOccured = useLocalize("unknownExceptionOccured");
  const userNotFoundMessage = useLocalize("userNotFound");

  const handleRegister = async () => {
    if (username === "" || password === "") {
      callNotification("error", userNotFoundMessage);
      return;
    }
    try {
      const response = await sendRegisterRequest({ username, password });
      if (response.data.user) {
        setUser(response.data.user);
        setJwt(response.data.jwt);
        navigate("/");
      } else {
        callNotification("error", unknownExceptionOccured);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      callNotification("error", axiosError!.response!.data!.message);
    }
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
