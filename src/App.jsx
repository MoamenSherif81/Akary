import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import About from "./components/pages/About";
import Home from "./components/pages/home";

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
