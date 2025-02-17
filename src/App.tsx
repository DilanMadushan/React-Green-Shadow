import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Crop from "./pages/Crop/Crop";
import Field from "./pages/Fields/Field";
import DashBoard from "./pages/DashBoard/DashBoard";
import Equipment from "./pages/Equipments/Equipment";
import Log from "./pages/Log/Log";
import Staff from "./pages/Staff/Staff";
import Vehicle from "./pages/Vehicle/Vehicle";

const routes = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "/crop", element: <Crop /> },
      { path: "/", element: <DashBoard /> },
      { path: "/equipment", element: <Equipment /> },
      { path: "/field", element: <Field /> },
      { path: "/log", element: <Log /> },
      { path: "/staff", element: <Staff /> },
      { path: "/vehicle", element: <Vehicle /> }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
