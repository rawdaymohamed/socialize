import Image from 'next/image'
import React from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg text-sm">
            {/* Top */}
            <div className='flex items-center justify-between text-gray-500 font-medium'>
                <span>Sponsored Ads</span>
                <MdOutlineMoreHoriz className="size-5 text-gray-600 cursor-pointer" />

            </div>
            {/* Bottom */}
            <div className={`flex flex-col mt-4  ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size == "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src='https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=600' alt='ad' fill className='rounded-lg object-cover' />
                </div>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=600' alt='ad' width={24} height={24} className='rounded-full object-cover w-6 h-6' />
                    <p className='text-blue-500 text-sm font-medium'>BigChef Lounge</p>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {
                        size === "sm" ? "Lorem ipsum, dolor sit amet."
                            : size === "md" ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolore ea assumenda illum repellat qua."
                                : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolore ea assumenda illum repellat quae quidem iusto, incidunt deleniti sapiente aspernatur tempore."
                    }
                </p>
                <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>
            </div>
        </div>
    )
}

export default Ad
