"use client";

import { Bell, ChevronDown } from "lucide-react";
import { GalleryIcon, KreaLogo } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import MenuList from "./MenuList";

export default function Header() {
  return (
    <div className="flex w-full bg-white dark:bg-black">
      <div className="flex w-full justify-between items-center p-4 px-10">
        {/* logo */}
        <div className="flex items-center gap-7">
          <div className="flex items-center">
            <KreaLogo width={24} height={24} />
          </div>
          <div className="flex items-center justify-center gap-1.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg px-2 py-1 transition-colors">
            {/* Profile/User indicator */}
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            {/* Username/identifier */}
            <span className="text-normal text-gray-700 dark:text-white font-medium select-none">
              benevolentrobocop
            </span>
            {/* Dropdown arrow */}
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
        {/* navlinks */}
        <div className="flex">
          <MenuList />
        </div>
        {/* toggle & profile */}
        <div className="flex items-center gap-3">
          <div className="bg-[#f5f5f5] flex items-center justify-center gap-2.5 dark:bg-[#202020] rounded-[13px] px-2 py-2">
            <GalleryIcon />
            <span className="font-semibold text-sm">Gallery</span>
          </div>
          <div className="bg-[#f5f5f5] dark:bg-[#202020] rounded-[13px] px-2 py-2">
            <Bell width={18} height={18} />
          </div>
          <ThemeToggle />
          {/* Profile/User indicator */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
