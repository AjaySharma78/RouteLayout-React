import React from "react";

function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[400px] dark:bg-black sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium dark:text-white text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-white">
                <i className="fa-solid fa-location-dot"></i>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Biratnagar,Nepal
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-white">
                <i className="fa-solid fa-phone"></i>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +977 9827373796
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-white">
                <i className="fa-solid fa-envelope"></i>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  aakirtsharma123@gmail.com
                </div>
              </div>
            </div>

            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg dark:bg-black border border-gray-400 text-gray-800 dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg dark:bg-black border border-gray-400 text-gray-800 dark:text-whitefont-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg dark:bg-black border border-gray-400 text-gray-800 dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-indigo-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-300 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
