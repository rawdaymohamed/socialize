import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const FriendRequests = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-5">
            <div className='flex items-center justify-between font-medium text-gray-700'>
                <h2 className='cursor-pointer'>Friend Requests</h2>
                <Link href="/" className='cursor-pointer text-blue-600 text-xs'>See All</Link>
            </div>
            {/* User */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image
                        src="/abstract-2.jpg"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded-full"
                        alt="avatar"
                    />
                    <span>Omar Yasser</span>
                </div>
                <div className='flex gap-4 justify-end items-center'>
                    <button className='cursor-pointer'><FaCheck className='text-gray-800' /></button>
                    <button className='cursor-pointer'><IoCloseSharp className='text-gray-800 ' /></button>
                </div>
            </div>
            {/* User */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image
                        src="/abstract-2.jpg"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded-full"
                        alt="avatar"
                    />
                    <span>Omar Yasser</span>
                </div>
                <div className='flex gap-4 justify-end items-center'>
                    <button className='cursor-pointer'><FaCheck className='text-gray-800' /></button>
                    <button className='cursor-pointer'><IoCloseSharp className='text-gray-800 ' /></button>
                </div>
            </div>
            {/* User */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image
                        src="/abstract-2.jpg"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded-full"
                        alt="avatar"
                    />
                    <span>Omar Yasser</span>
                </div>
                <div className='flex gap-4 justify-end items-center'>
                    <button className='cursor-pointer'><FaCheck className='text-gray-800' /></button>
                    <button className='cursor-pointer'><IoCloseSharp className='text-gray-800 ' /></button>
                </div>
            </div>
            {/* User */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image
                        src="/abstract-2.jpg"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded-full"
                        alt="avatar"
                    />
                    <span>Omar Yasser</span>
                </div>
                <div className='flex gap-4 justify-end items-center'>
                    <button className='cursor-pointer'><FaCheck className='text-gray-800' /></button>
                    <button className='cursor-pointer'><IoCloseSharp className='text-gray-800 ' /></button>
                </div>
            </div>
        </div>
    )
}

export default FriendRequests
