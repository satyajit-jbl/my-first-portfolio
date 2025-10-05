import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
// import About from "../Pages/About/About";
import {Philately} from "../Pages/Activities/Philately";
// import Numismatics from "../Pages/Activities/Numismatics";
// import Marathon from "../Pages/Activities/Marathon";
// import PlantedTank from "../Pages/Activities/PlantedTank";
// import Achievements from "../Pages/Achievements/Achievements";
// import Contact from "../Pages/Contact/Contact";
import { About } from "../Pages/About/About";
// import Philately from "../Pages/Activities/Philately";
import Numismatics from "../Pages/Activities/Numismatics";
import {Marathon} from "../Pages/Activities/Marathon";
import {PlantedTank} from "../Pages/Activities/PlantedTank";
import Achievements from "../Pages/Achievements/Achievements";
import { Contact } from "../components/Contact";
import { Hobby } from "../Pages/Hobby/Hobby";
import Photography from "../Pages/Activities/Photography";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/philately", element: <Philately /> },
      { path: "/numismatics", element: <Numismatics /> },
      { path: "/photography", element: <Photography /> },
      { path: "/marathon", element: <Marathon /> },
      { path: "/planted-tank", element: <PlantedTank /> },
      { path: "/achievements", element: <Achievements /> },
      { path: "/contact", element: <Contact /> },
      { path: "/hobby", element: <Hobby /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
