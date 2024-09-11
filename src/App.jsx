import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./App.css";

// api = c6ddfbf86ba792e376ac56508a7908c1

function App() {
  return <RouterProvider router={router} />;
}

export default App;
