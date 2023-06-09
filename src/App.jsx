import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import About from "./components/pages/About";
import Home from "./components/pages/home";
import Contact from "./components/pages/Contact";
import UnitPricing from "./components/pages/UnitPricing";
import CalculationOfFinishing from "./components/pages/CalculationOfFinishing";

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
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
