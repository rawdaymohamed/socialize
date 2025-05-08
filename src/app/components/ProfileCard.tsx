import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-6'>
      <div className='h-20 relative'>
        <Image fill src="/abstract-1.jpg" className='rounded-md object-cover' alt='abstract' />
        <Image src="/abstract-2.jpg" width={48} height={48} className='rounded-full w-12 h-12  object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10' alt='abstract' />
      </div>
      <div className='h-32 flex flex-col gap-2 items-center'>
        <h1 className='font-semibold'>Rawda Yasser</h1>
        <div className='flex items-center gap-5'>
          <div className='flex gap-2'>
            <Image width={24} height={24} src="/abstract-1.jpg" className='rounded-full object-cover h-6 w-6' alt='abstract' />
            <Image width={24} height={24} src="/abstract-1.jpg" className='rounded-full object-cover h-6 w-6' alt='abstract' />
            <Image width={24} height={24} src="/abstract-1.jpg" className='rounded-full object-cover h-6 w-6' alt='abstract' />
          </div>
        </div>
          <span className='text-gray-800 font-semibold text-xs'>500 followers</span>
          <button className='bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition cursor-pointer'>My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
