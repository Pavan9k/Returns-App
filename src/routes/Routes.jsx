import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import SidebarLayout from "../components/sidebar/SidebarLayout.jsx";
import Home from "../components/home/Home.jsx";
import { allDetailsPaths, paths } from "../components/paths/pathConstants";
import { UserCreation } from "../components/user/UserCreation.jsx";
import { EditUser } from "../components/user/EditUser.jsx";

const router = createBrowserRouter([
  {
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
    children: [
      { path: paths.HOME, element: <Home /> },
      {
        path: paths.USER_CREATION,
        element: <UserCreation />,
        // children: [
        //   { path: allDetailsPaths.BASIC_INFO, element: <BasicInfo /> },
        // ],
      },
      { path: paths.EDIT_USER, element: <EditUser /> },
      { path: "/", element: <Navigate to={paths.HOME} replace /> },
    ],
  },
]);

export default router;
