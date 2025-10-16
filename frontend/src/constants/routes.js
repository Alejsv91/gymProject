import Gyms from "../pages/gyms/Gyms";
import Team from "../pages/Team";
import GymCreate from "../pages/gyms/GymCreate";
import GymEdit from "../pages/gyms/GymEdit";

export const ROUTES = [
  { path: "/gyms", element: <Gyms />, label: "Gyms", showInNav: true },
  { path: "/team", element: <Team />, label: "Team", showInNav: true },
  {
    path: "/gym/create",
    element: <GymCreate />,
    label: "Create Gym",
    showInNav: true,
  },
  {
    path: "/gym/edit/:id",
    element: <GymEdit />,
    label: "Edit Gym",
    showInNav: false,
  },
];

export const ROUTE_PATHS = {
  gymEdit: (id) => `/gym/edit/${id}`,
};
