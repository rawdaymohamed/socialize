import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import { LuDiscAlbum, LuZap } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { SiMarketo } from "react-icons/si";
import { MdEventNote } from "react-icons/md";
import { FaDiscourse, FaListUl, FaVideo } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Ad from "./Ad";
const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return <div className="flex flex-col gap-6">
    {type === "home" && <ProfileCard />}
    <div className="p-4 bg-white shadow-md rounded-lg text-sm text-gray-500 flex flex-col gap-2">
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <LuZap className="size-5" />
        <span>My Posts</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <FiActivity className="size-5" />
        <span>Activity</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <SiMarketo className="size-5" />
        <span>Marketplace</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <MdEventNote className="size-5" />
        <span>Events</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <LuDiscAlbum className="size-5" />
        <span>Album</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <FaVideo className="size-5" />
        <span>Videos</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <AiOutlineNotification className="size-5" />
        <span>News</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <FaDiscourse className="size-5" />
        <span>Courses</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <FaListUl className="size-5" />
        <span>Lists</span>
      </Link>
      <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <IoSettingsSharp className="size-5" />
        <span>Settings</span>
      </Link>
    </div>
    <Ad size="sm" />
  </div>;
};

export default LeftMenu;
