import Image from 'next/image'
import React from 'react'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'

import { MdOutlineEmojiEmotions, MdOutlineMoreHoriz } from 'react-icons/md'

const Comments = () => {
    return (
        <div>
            {/* Write */}
            <div className='flex items-center gap-3 flex-1'>
                <Image
                    src="/abstract-3.jpg"
                    width={16}
                    height={16}
                    className="w-10 h-10 object-cover rounded-full"
                    alt="avatar"
                />
                <div className='flex justify-between items-center flex-1 rounded-xl bg-slate-100 px-2 py-2 w-full'>
                    <input type="text" placeholder='Write a comment...' className='bg-transparent outline-none' />
                    <MdOutlineEmojiEmotions className="cursor-pointer text-gray-700 size-4" />

                </div>
            </div>
            {/* Comments */}
            <div className='my-3'>
                {/* Comment */}
                <div className='flex gap-4'>
                    {/* Avatar */}
                    <Image
                        src="/abstract-1.jpg"
                        width={40}
                        height={40}
                        className="w-12 h-12 object-cover rounded-full"
                        alt="avatar"
                    />
                    {/* Description */}
                    <div className='flex flex-col gap-2 text-gray-700'>
                        <h2 className='font-bold text-sm'>Rawda Yasser</h2>
                        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dicta deleniti molestiae ratione perferendis sunt dolorem neque voluptate dolore illum.
                            Voluptas at nesciunt odio dolorum rerum veniam cum eligendi ipsam.</p>
                        <div className="flex items-center justify-between text-sm my-2">
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
                                    <FaRegHeart className=" size-3" />
                                    <span>12</span>
                                    <span className="hidden md:block">Likes</span>
                                </div>
                                <div className="flex gap-2 items-center  text-gray-700 cursor-pointer">
                                    <FaRegComment className=" size-3" />
                                    <span>2</span>
                                    <span className="hidden md:block">Replies</span>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex gap-2 items-center text-gray-700 cursor-pointer">
                                    <span >Reply</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Icon */}
                    <div className=''>
                        <MdOutlineMoreHoriz className="size-5 text-gray-600 cursor-pointer" /></div>
                </div>
            </div>
        </div>
    )
}

export default Comments
