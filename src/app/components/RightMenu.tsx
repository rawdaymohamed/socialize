import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from './Ad'

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className='flex flex-col gap-7'>
      {/* Friend Requests */}
      <FriendRequests />

      {/* Birthdays */}
      <Birthdays />

      {/* Ads */}
      <Ad size='md' />

    </div>
  )
}

export default RightMenu
