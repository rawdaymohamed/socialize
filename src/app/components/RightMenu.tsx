import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from './Ad'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className='flex flex-col gap-7'>
      {userId ? <>
        <UserInfoCard />
        <UserMediaCard  />
      </> : null
      }
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
