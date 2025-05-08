import LeftMenu from "@/app/components/LeftMenu";
import PostFeed from "@/app/components/PostFeed";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 py-5">
      {/* Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="w-full space-y-5">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src="/abstract-1.jpg" fill alt="" className="object-cover rounded-md" />
              <Image src="/abstract-2.jpg" width={128} height={128} alt="" className="absolute w-32 h-32 left-0 right-0 m-auto -bottom-16 rounded-full object-cover ring-4 ring-white " />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium text-gray-800">Rawda Yasser</h1>
            <div className="flex gap-12 items-center justify-center mb-4">
              <div className="flex flex-col items-center text-gray-800">
                <p className="font-bold text-sm">142</p>
                <p className="text-xs">Posts</p>
              </div>
              <div className="flex flex-col items-center text-gray-800">
                <p className="font-bold text-sm">1.2k</p>
                <p className="text-xs">Followers</p>
              </div> 
                <div className="flex flex-col items-center text-gray-800">
                <p className="font-bold text-sm">1.3k</p>
                <p className="text-xs">Following</p>
              </div>
            </div>
          </div>
          <PostFeed />
        </div>
      </div>
      {/* Right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="123" />
      </div>
    </div>
  );
}
export default ProfilePage;
