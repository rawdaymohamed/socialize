import LeftMenu from "@/app/components/LeftMenu";
import PostFeed from "@/app/components/PostFeed";
import RightMenu from "@/app/components/RightMenu";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 py-5">
      {/* Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="w-full space-y-5">

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
