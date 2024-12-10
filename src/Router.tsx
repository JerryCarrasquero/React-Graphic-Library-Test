import { createBrowserRouter } from "react-router-dom";
import MainPageRouter from "./views/MainPage/MainPageRoutes";
/* It is using
the `createBrowserRouter` function to create a browser router for the application. The
`MainPageRouter` contains the routes for the main page of the application. The
`createBrowserRouter([...MainPageRouter])` call is passing the routes defined in `MainPageRouter` to
create the browser router for the application. The `App` variable is then assigned the created
browser router. */

const App = createBrowserRouter([...MainPageRouter]);

export default App;
