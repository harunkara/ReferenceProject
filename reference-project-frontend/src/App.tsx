import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CharounRoutes } from "./routes.config";

function App() {
  return (
    <>
      <BrowserRouter>
        <CharounRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
