import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import UnitPricing from "../pages/UnitPricing";
import CalculationOfFinishing from "../pages/CalculationOfFinishing";
import SellUnit from "../pages/SellUnit";

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
        element: <Contact  />,
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
        path: "services/set-unit", 
        element: <SellUnit />
      }
    ],
  },
]);

export default router;