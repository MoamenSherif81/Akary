import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, useLocation } from "react-router-dom";

import router from "./components/routers/mainRouter";
import { useEffect } from "react";

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;