import { createBrowserRouter } from "react-router-dom";
import MainPageRouter from "./views/MainPage/MainPageRoutes";

const App = createBrowserRouter([...MainPageRouter]);

export default App;
