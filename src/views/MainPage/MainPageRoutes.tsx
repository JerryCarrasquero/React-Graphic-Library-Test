import MainPage from "./MainPage";
import CreateItemPage from "./routes/CreateItemPage";
import DetailsPage from "./routes/DetailsPage";
/* This code snippet is defining an array called `MainPageRouter` that contains objects representing
different routes in a TypeScript React application. Each object in the array has two properties:
`path` which specifies the route path, and `element` which represents the component to render when
that route is accessed. */

const MainPageRouter = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
  },
  {
    path: "/create",
    element: <CreateItemPage />,
  },
];

export default MainPageRouter;
