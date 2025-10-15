import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import Philately from "../Pages/Activities/Philately";
import Numismatics from "../Pages/Activities/Numismatics";
import Marathon from "../Pages/Activities/Marathon";
import { PlantedTank } from "../Pages/Activities/PlantedTank";
import Achievements from "../Pages/Achievements/Achievements";
import { Contact } from "../components/Contact";
import { Hobby } from "../Pages/Hobby/Hobby";
import Photography from "../Pages/Activities/Photography";
import Nature from "../Pages/Hobby/Photography/Nature";
import Culture from "../Pages/Hobby/Photography/Culture";
import Travel from "../Pages/Hobby/Photography/Travel";
import People from "../Pages/Hobby/Photography/People";
import Artisan from "../Pages/Hobby/Photography/Artisan";
import NotFound from "../Pages/NotFound";
import Random from "../Pages/Hobby/Photography/Random";
import Coins from "../Pages/Activities/Numismatics/Coins";
import Banknotes from "../Pages/Activities/Numismatics/Banknotes";
import Awards from "../Pages/Activities/Numismatics/Awards";
import Exhibitions from "../Pages/Activities/Numismatics/Exhibitions";
import RareStamps from "../Pages/Activities/Philately/RareStamps";
import FirstDayCovers from "../Pages/Activities/Philately/FirstDayCovers";
import ExpoVisit from "../Pages/Activities/Philately/ExpoVisit";
import PhilatelyAwards from "../Pages/Activities/Philately/PhilatelyAwards";
import RunningEvents from "../Pages/RunningEvents";
import StravaData from "../Pages/StravaData";
import StravaDashboard from "../components/StravaDashboard";
import StravaActivities from "../Pages/Activities/Marathon/StravaActivities";
import MarathonAwards from "../Pages/Activities/Marathon/MarathonAwards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { 
        path: "/philately", 
        element: <Philately />,
        children: [
          { path: "rare-stamps", element: <RareStamps /> },
          { path: "first-day-covers", element: <FirstDayCovers /> },
          { path: "expo-visit", element: <ExpoVisit /> },
          { path: "awards", element: <PhilatelyAwards /> },
        ], 
      },
      { 
        path: "/numismatics", 
        element: <Numismatics />,
        children: [
          {index: true, element: <Coins/>},
          { path: "coins", element: <Coins /> },
          { path: "banknotes", element: <Banknotes /> },
          { path: "awards", element: <Awards /> },
          { path: "exhibitions", element: <Exhibitions /> },
        ], 
      },
      {
        path: "/photography",
        element: <Photography />,
        children: [
          { path: "nature", element: <Nature /> },
          { path: "culture", element: <Culture /> },
          { path: "travel", element: <Travel /> },
          { path: "people", element: <People /> },
          { path: "artisan", element: <Artisan /> },
          { path: "random", element: <Random /> },
        ],
      },
      { 
        path: "/marathon", 
        element: <Marathon />, children: [
          { index: true, element: <RunningEvents /> },
          { path: "events", element: <RunningEvents /> },
          { path: "RunAwards", element: <MarathonAwards /> },
          { path: "strava", element: <StravaDashboard /> },
          // { path: "strava", element: <StravaActivities /> },
        ], 
      },
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
