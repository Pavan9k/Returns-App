import "./App.css";
import SidebarLayout from "./components/sidebar/SidebarLayout.jsx";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";

function App() {
  return (
    <RouterProvider router={Routes}>
      <SidebarLayout>
        {/* Routes will be rendered here via <Outlet> */}
      </SidebarLayout>
    </RouterProvider>
  );
}

export default App;
