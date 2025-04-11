import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* Left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="uppercase text-xl font-bold text-blue-600">
          socialize
        </Link>
      </div>
      {/* Center */}
      <div className="hidden md:block w-[50%]">
        {/* Links */}
        <div className="flex gap-8 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <FaHome className="size-5" />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <FaUserFriends className="size-5" />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <CiCirclePlus className="size-6" />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
        
      </div>
    </div>
  );
};

export default Navbar;
