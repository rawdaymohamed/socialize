import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-5">
      <div className='flex items-center justify-between font-medium text-gray-700'>
        <h2 className='cursor-pointer'>User Media</h2>
        <Link href="/" className='cursor-pointer text-blue-600 text-xs'>See All</Link>
      </div>
      {/* Bottom */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-1.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-3.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-2.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-3.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-4.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-5.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-1.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="/abstract-2.jpg" fill alt='' className='object-cover rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard
