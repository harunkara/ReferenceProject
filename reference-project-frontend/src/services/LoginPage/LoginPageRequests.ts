import axios from "axios";
import { ILoginModel } from "../../models/ILoginModel";

export const sendLoginRequest = async (loginData: ILoginModel) => {
  const result = await axios.post(
    `${import.meta.env.VITE_API}/auth/login`,
    loginData
  );
  return result;
};
