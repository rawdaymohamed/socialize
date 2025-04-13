import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";

const Post = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Top section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src="/abstract-3.jpg"
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
            alt="avatar"
          />
          <Link href="/" className="font-medium text-md text-gray-900">
            Rawda Yasser
          </Link>
        </div>
        <MdOutlineMoreHoriz className="size-5 text-gray-600" />
      </div>
      {/* Content section */}
      <div className="space-y-5">
        <Image
          src="/abstract-4.jpg"
          alt="post"
          className="object-cover w-full min-h-80 rounded-lg"
          width={500}
          height={400}
        />
        <p className="text-sm font-semibold text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          quisquam, rerum ipsa, quis accusantium autem ratione porro, amet harum
          quaerat corrupti fuga ex velit nam est delectus fugiat? Quod, eos.
        </p>
      </div>
      {/* Actions */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex gap-2 text-gray-700 cursor-pointer">
            <FaRegHeart className=" size-5" />
            <span>121</span>
            <span className="hidden md:block">Likes</span>
          </div>
          <div className="flex gap-2 text-gray-700 cursor-pointer">
            <FaRegComment className=" size-5" />
            <span>12</span>
            <span className="hidden md:block">Comments</span>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-2 text-gray-700 cursor-pointer">
            <IoMdShareAlt className=" size-5" />

            <span>5</span>
            <span className="hidden md:block">Reposts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
