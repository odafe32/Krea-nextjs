"use client";

import { CheckSquare, Type, FolderOpen } from "lucide-react";
import { PiHouseFill } from "react-icons/pi";
import {
  AssetsIcon,
  EditIcon,
  EnhancerIcon,
  GalleryIcon,
  RealTimeIcon,
  VideoIcon,
} from "./Icons";

export default function MenuList() {
  const menuItems = [
    { icon: PiHouseFill, label: "Home", active: true },
    { icon: GalleryIcon, label: "Chat" },
    { icon: VideoIcon, label: "Video" },
    { icon: EnhancerIcon, label: "Enhancer" },
    { icon: RealTimeIcon, label: "Real Time" },
    { icon: EditIcon, label: "Edit" },
    { icon: AssetsIcon, label: "Assets" },
  ];

  return (
    <div className="flex items-center gap-1 bg-[#f5f5f5] dark:bg-[#202020] rounded-3xl px-2 py-2">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`
            relative group px-6 py-3 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105
            ${
              item.active
                ? "bg-[#fff] dark:bg-[#fff] shadow-sm"
                : "hover:bg-white/50 dark:hover:bg-gray-700/50 "
            }
          `}
        >
          <item.icon
            className={`
              w-5 h-5 transition-colors
              ${
                item.active
                  ? "text-gray-900 dark:text-black"
                  : "text-gray-600 dark:text-gray-400"
              }
            `}
          />
          {/* Tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            {item.label}
            {/* Tooltip arrow */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-b-gray-900 dark:border-b-gray-100"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
