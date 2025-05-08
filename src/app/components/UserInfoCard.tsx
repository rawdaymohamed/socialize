import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaLink } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-5">
      <div className='flex items-center justify-between font-medium text-gray-700'>
        <h2 className='cursor-pointer'>User Information</h2>
        <Link href="/" className='cursor-pointer text-blue-600 text-xs'>See All</Link>
      </div>
      {/* Bottom */}
      <div className='flex flex-col gap-5 text-gray-500'>
        <div className='flex items-center gap-2'>
          <span className='text-xl text-black'>Rawda Yasser</span>
          <span className='text-sm'>@rawdayasser</span>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nobis quae, culpa, neque,
          commodi possimus perspiciatis veniam cumque beatae at accusamus mollitia quam aspernatur magni ipsum esse nulla fugiat quasi!</p>
        <div className='flex items-center gap-2'>
          <IoLocationSharp className='text-gray-700 size-4' />
          <span>Lives in <span className='font-bold'>Cairo</span></span>
        </div>
        <div className='flex items-center gap-2'>
          <IoIosSchool className='text-gray-700 size-4' />
          <span>Went to <span className='font-bold'>Cairo University</span></span>
        </div>
        <div className='flex items-center gap-2'>
          <MdWork className='text-gray-700 size-4' />
          <span>Works at <span className='font-bold'>Freelancer.com</span></span>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <FaLink className='text-gray-700 size-4' />
            <a href='https://github.com/rawdaymohamed' className='text-blue-500 font-medium'>rawdayasser.com</a>
          </div>
        </div>
          <div className='flex items-center gap-2'><FaCalendarAlt className='text-gray-700 size-4' />Joined Apr 18, 2025</div>
      </div>
      <button className='bg-blue-500 text-white text-sm rounded-md px-3 py-2 cursor-pointer'>Follow</button>
      <span className='text-red-500 self-end cursor-pointer text-xs'>Block User</span>
    </div>
  )
}

export default UserInfoCard
