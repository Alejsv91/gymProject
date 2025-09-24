import { NavLink, Route, Routes } from "react-router-dom";
import Gyms from "../pages/gyms/Gyms";
import Team from "../pages/Team";
import GymCreate from "../pages/gyms/GymCreate";

const navigation = [
  { path: "/gyms", element: <Gyms />, label: "Gyms" },
  { path: "/team", element: <Team />, label: "Team" },
  { path: "/gym/create", element: <GymCreate />, label: "Create Gym" },
];

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 text-white px-4 py-3 flex gap-6">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4">
        <Routes>
          {navigation.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
