import { ILoginModel } from "../../models/ILoginModel";

export const sendLoginRequest = async (loginData: ILoginModel) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };
  fetch(`${import.meta.env.VITE_API}/auth/login`, requestOptions).then(
    (response) => {
      if (!response.ok) throw new Error("İşlem başarısız");
      else return response.json();
    }
  );
};
