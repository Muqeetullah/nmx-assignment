import React, { useState } from "react";
import { HiOutlineSearch, HiTicket, HiX } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/SIdeBarController";
import { links } from "../utils/contants";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index, url) => {
    setActiveIndex(index);
    navigate(url); // Navigate to the specified URL
    // You can also perform other actions on tab click if needed
  };

  return (
    <div
      className={`transition-all duration-500 fixed top-0 ${
        isSidebarOpen ? "left-0" : "-left-64"
      }`}
    >
      <div className="hidden lg:flex h-screen overflow-y-auto flex-col bg-white w-64 px-4 py-8 border-r min-h-screen relative">
        <div className="flex flex-col mt-6 justify-between flex-1">
          <nav className="text">
            {links.map((link, index) => {
              const { id, url, text, icon } = link;
              return (
                <div
                  key={id}
                  onClick={() => handleTabClick(index, url)}
                  className={`capitalize flex items-center px-4 py-2 cursor-pointer ${
                    index === activeIndex
                      ? "bg-gray-200 text-gray-700"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-700"
                  } rounded-md ${index > 0 ? "mt-5" : ""}`}
                >
                  {icon}
                  <span className="mx-4 font-medium">{text}</span>
                </div>
              );
            })}
            <hr className="my-6" />
            <div
              onClick={() =>
                handleTabClick(links.length, "/color-shade-generator")
              }
              className={`flex items-center px-4 py-2 mt-5 rounded-md cursor-pointer text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform ${
                links.length === activeIndex ? "bg-gray-200 text-gray-700" : ""
              }`}
            >
              <HiTicket className="w-5 h-5" />
              <span className="mx-4 font-medium">Ticket</span>
            </div>
            <div
              onClick={() => handleTabClick(links.length + 1, "/settings")}
              className={`flex items-center px-4 py-2 mt-5 rounded-md cursor-pointer text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform ${
                links.length + 1 === activeIndex
                  ? "bg-gray-200 text-gray-700"
                  : ""
              }`}
            >
              <MdSettings className="w-5 h-5" />
              <span className="mx-4 font-medium">Settings</span>
            </div>
          </nav>
          <div className="flex items-center px-4 -mx-2 mt-5">
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
              className="h-9 w-9 mx-2 object-center object-cover rounded-full"
            />
            <h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
              John Doe
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
