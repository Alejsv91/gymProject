import { NavLink, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 text-white px-4 py-3 flex gap-6">
        {ROUTES.filter((item) => item.showInNav).map((item) => (
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
          {ROUTES.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
