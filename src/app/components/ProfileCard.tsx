import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-6'>
      <div className='h-20 relative'>
        <Image fill src="/abstract-1.jpg" className='rounded-md object-cover' alt='abstract' />
        <Image src="/abstract-2.jpg" width={48} height={48} className='rounded-full w-12 h-12  object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10' alt='abstract' />
      </div>
      <div className='h-20 flex flex-col gap-2 items-center'>
        <h1 className='font-semibold'>Rawda Yasser</h1>
        <div className='flex items-center gap-4'></div>
      </div>
    </div>
  )
}

export default ProfileCard
