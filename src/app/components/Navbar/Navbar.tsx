import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { FaHome, FaRegUserCircle, FaUserFriends } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { IoPeople } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

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
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid  border-e-transparent  align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="flex items-center gap-7 cursor-pointer">
              <IoPeople className="size-6 text-gray-600" />
              <FaRegMessage className="size-4 text-gray-600" />
              <IoMdNotifications className="size-6 text-gray-600" />
              <UserButton/>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-gray-600">
              <FaRegUserCircle className="size-5" />
              <Link href="/sign-in" className="text-sm">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
