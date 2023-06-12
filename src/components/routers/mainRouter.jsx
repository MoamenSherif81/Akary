import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import UnitPricing from "../pages/UnitPricing";
import CalculationOfFinishing from "../pages/CalculationOfFinishing";
import SellUnit from "../pages/SellUnit";
import AllUnites from "../pages/AllUnites";
import SingleUnit from "../pages/SingleUnit";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services/unit-pricing", 
        element: <UnitPricing />
      },
      {
        path: "services/calculation-of-finishing", 
        element: <CalculationOfFinishing />
      },
      {
        path: "services/sell-unit", 
        element: <SellUnit />
      },
      {
        path: 'services/all-units',
        element: <AllUnites />
      },
      {
        path: '/unit/*',
        element: <SingleUnit />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ],
  },
]);

export default router;