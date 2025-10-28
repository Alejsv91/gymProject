import Gyms from "../pages/gyms/Gyms";
import Team from "../pages/Team";
import GymCreate from "../pages/gyms/GymCreate";
import GymEdit from "../pages/gyms/GymEdit";

export const ROUTES = [
  {
    menuName: "Gyms",
    submenu: [
      {
        path: "/gyms",
        element: <Gyms />,
        label: "Gyms Details",
        showInNav: true,
      },
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
    ],
  },
  // {
  //   menuName: "Owners",
  //   submenu: [
  //     {
  //       path: "/owner/create",
  //       element: <OwnerCreate />,
  //       label: "Create Owner",
  //       showInNav: true,
  //     },
  //   ],
  // },
];

export const ROUTE_PATHS = {
  gymEdit: (id) => `/gym/edit/${id}`,
};
