import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
} from "react-icons/fa";

import { HiDocument } from "react-icons/hi";
export const links = [
  {
    id: 1,
    url: "/color-shade-generator",
    text: "dashboard",
    icon: <FaHome className="w-5 h-5" />,
  },
  {
    id: 2,
    url: "/admin/view-user-list",
    text: "users",
    icon: <FaUserFriends className="w-5 h-5" />,
  },
  {
    id: 3,
    url: "/admin/view-book-list",
    text: "books",
    icon: <FaFolderOpen className="w-5 h-5" />,
  },
  {
    id: 4,
    url: "/view-issued-book-list",
    text: "issued Books",
    icon: <FaCalendarAlt className="w-5 h-5" />,
  },
  {
    id: 5,
    url: "/sidebar",
    text: "profile",
    icon: <HiDocument className="w-5 h-5" />,
  },
];
