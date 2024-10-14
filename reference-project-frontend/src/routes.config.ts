import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/Login";
import NotFoundPage from "./pages/NotFoundPage/NotFound";
import HomePage from "./pages/HomePage/Home";
import RegisterPage from "./pages/RegisterPage/Register";

export function CharounRoutes() {
  const element = useRoutes([
    {
      path: "/login",
      Component: LoginPage,
    },
    {
      path: "*",
      Component: NotFoundPage,
    },
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "/register",
      Component: RegisterPage,
    },
  ]);

  return element;
}
