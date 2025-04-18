import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGift } from 'react-icons/fa'

const Birthdays = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-5">
            <div className='font-medium text-gray-700'>
                <h2>Birthdays</h2>
            </div>

            <div className='flex gap-4 justify-between items-center'>
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
                <button className='px-2 py-1 rounded-md bg-blue-500 text-white text-xs'>Celebrate</button>
            </div>
            {/* Upcoming Birthdays */}
            <div className='p-4 bg-slate-200 rounded-lg flex items-center gap-5'>
                <FaGift className='size-5 text-gray-700' />
                <Link href="/" className='flex flex-col gap-1 text-xs'>
                    <span className='text-gray-700'>Upcoming Birthdays</span>
                    <span className='text-gray-500'>See other 16 upcoming birthdays</span>
                </Link>
            </div>
        </div>
    )
}

export default Birthdays
