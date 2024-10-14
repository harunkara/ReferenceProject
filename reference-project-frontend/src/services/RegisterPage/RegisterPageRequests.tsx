import axios from "axios";
import { ILoginModel } from "../../models/ILoginModel";

export const sendRegisterRequest = async (registerData: ILoginModel) => {
  const result = await axios.post(
    `${import.meta.env.VITE_API}/auth/register`,
    registerData
  );
  return result;
};
