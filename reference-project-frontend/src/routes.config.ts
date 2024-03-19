import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/Login";
import NotFoundPage from "./pages/NotFoundPage/NotFound";

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
  ]);

  return element;
}
