import React from "react";
import Post from "@/app/components/Post";

const PostFeed = () => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md flex flex-col gap-12 ">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostFeed;
