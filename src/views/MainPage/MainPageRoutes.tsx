import MainPage from "./MainPage";
import CreateItemPage from "./routes/CreateItemPage";
import DetailsPage from "./routes/DetailsPage";

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
