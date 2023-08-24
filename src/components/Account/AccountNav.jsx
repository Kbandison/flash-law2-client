import React from "react";
import { Outlet, useOutlet } from "react-router-dom";

const AccountNav = () => {
  return (
    <div>
      <div>
        <nav className="">
          <ul className="flex justify-center gap-12 mt-16 text-gray-300 text-sm font-medium">
            <li>
              <a
                href="/account"
                className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ease-in-out duration-500"
              >
                Account
              </a>
            </li>
            <li>
              <a
                href="/account/settings"
                className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ease-in-out duration-500"
              >
                Chats
              </a>
            </li>
            <li>
              <a
                href="/account/logout"
                className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ease-in-out duration-500"
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default AccountNav;
