import "./App.css";
import Providers from "./provider/providers";
import Router from "./Router";
import AppBarMain from "./share/component/AppBarMain";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Providers>
      <AppBarMain></AppBarMain>
      <RouterProvider router={Router} />
    </Providers>
  );
}

export default App;
