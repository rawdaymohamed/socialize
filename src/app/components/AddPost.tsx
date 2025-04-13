import Image from "next/image";
import React from "react";
import {
  MdAddPhotoAlternate,
  MdOutlineEmojiEmotions,
  MdOutlineEvent,
  MdOutlinePoll,
} from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex justify-between gap-6 text-sm">
      {/* Avatar */}
      <div className="">
        <Image
          src="/abstract-2.jpg"
          width={50}
          height={50}
          className="w-12 h-12 rounded-full object-cover"
          alt="avatar"
        />
      </div>
      {/* Post */}
      <div className="flex-1 flex flex-col gap-5">
        {/* Text Input */}
        <div className="flex gap-4 items-center ">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind...?"
            className="flex-1 bg-slate-100 rounded-lg p-3"
          ></textarea>
          <MdOutlineEmojiEmotions className="cursor-pointer text-gray-700 size-5 self-end" />
        </div>
        {/* Options */}
        <div className="flex flex-wrap items-center gap-5 text-gray-700">
          <div className="flex gap-2 items-center cursor-pointer">
            <MdAddPhotoAlternate className="size-6" />
            <span>Photo</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <RiVideoAddLine className="size-6" />
            <span>Video</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <MdOutlinePoll className="size-6" />
            <span>Poll</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <MdOutlineEvent className="size-6" />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
