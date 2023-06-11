import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";

import router from "./components/routers/mainRouter";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
