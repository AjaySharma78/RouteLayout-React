import React from "react";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="border-y border-gray-500 dark:bg-black ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="/src/assets/output-onlinepngtools (1).png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase">
                Resources
              </h2>
              <ul className="font-medium">
                {["Home", "About", "Contact"].map((items, index) => {
                  return (
                    <li className="mb-4" key={index}>
                      <NavLink
                        to={items === "Home" ? `/` : `${items}`}
                        className={({ isActive }) =>
                          `${isActive ? "text-indigo-500" : "text-gray-500"}`
                        }
                      >
                        {items}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/AjaySharma78"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/___ajay___sharma___/"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-900 dark:border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <Link to="" className="hover:underline">
              AjaySharma
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-indigo-500 ">
              <i className="fa-brands fa-facebook-f"></i>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-indigo-500">
              <i className="fa-brands fa-discord"></i>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-indigo-500">
              <i className="fa-brands fa-twitter"></i>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              to="https://github.com/AjaySharma78"
              className="text-gray-500 hover:text-indigo-500"
            >
              <i className="fa-brands fa-github"></i>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-indigo-500">
              <i className="fa-solid fa-basketball"></i>
              <span className="sr-only">Dribble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
