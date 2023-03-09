import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SideForm() {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 right-0 z-40 w-64 h-screen border-l-2 border-blue transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <div className="flex justify-between content-between">
            <h1 className="text-xl text-blue font-bold font-poppins">
              Supplier ID
            </h1>
            <Image
              src="images/trash.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <form action="" className="my-5">
            <div className="rounded-md shadow-sm text-base font-inter">
              <div>
                <label htmlFor="code" className="font-poppins font-bold">
                  Supplier Code
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  required
                  className="mt-2 mb-5 relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Supplier Code"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="code" className="font-poppins font-bold">
                  Supplier Code
                </label>
                <select
                  id="countries"
                  className="mt-2 relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
                <p className="text-blue text-sm text-center font-inter">
                  New SUppliers?
                  <Link href="/register" className="underline ml-2">
                    Click Here
                  </Link>
                </p>
              </div>

              <div>
                <input
                  className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                />
              </div>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
}
