import React from "react";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../../context/theme";
function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <>
      <header className="flex justify-between items-center border-b border-gray-500 dark:bg-black ">
        <div>
          <Link>
            <img
              src="/src/assets/output-onlinepngtools (1).png"
              alt="logo"
              width={200}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex justify-between items-center gap-4 px-10 ">
            {["Home", "Contact", "About", "Blog"].map((items, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={items === "Home" ? "/" : items}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-indigo-500" : "dark:text-white "
                      }  px-5 font-bold   `
                    }
                  >
                    {items}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="pr-5">
          <label className="relative inline-flex items-center cursor-pointer ">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={onChangeBtn}
              checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </header>
    </>
  );
}
export default Navbar;
