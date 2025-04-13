import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Stories from "@/app/components/Stories";
import AddPost from "@/app/components/AddPost";
import PostFeed from "@/app/components/PostFeed";

export default function Home() {
  return (
    <div className="flex gap-6 py-5">
      {/* Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="w-full space-y-5">
          <Stories />
          <AddPost />
          <PostFeed />
        </div>
      </div>
      {/* Right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
}
