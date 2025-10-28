import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <nav className="bg-gray-800 text-white px-4 py-3 flex gap-6 relative">
        {ROUTES.map((menu) => (
          <div key={menu.menuName} className="relative">
            {/* Botón del menú principal */}
            <button
              onClick={() => toggleMenu(menu.menuName)}
              className="font-bold px-2 py-1 hover:text-yellow-400"
            >
              {menu.menuName}
            </button>

            {/* Submenú visible solo si está abierto */}
            {openMenu === menu.menuName && (
              <div className="absolute left-0 mt-2 bg-gray-700 rounded shadow-lg z-10 min-w-[150px]">
                <div className="flex flex-col">
                  {menu.submenu
                    .filter((item) => item.showInNav)
                    .map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `px-4 py-2 block hover:bg-gray-600 ${
                            isActive ? "text-yellow-400 font-semibold" : ""
                          }`
                        }
                        onClick={() => setOpenMenu(null)} // Cierra el submenú al navegar
                      >
                        {item.label}
                      </NavLink>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4">
        <Routes>
          {ROUTES.flatMap((menu) =>
            menu.submenu.map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))
          )}
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
