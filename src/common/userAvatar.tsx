import React from 'react'
import { Avatar, Tooltip } from 'flowbite-react'
import avatar1 from '../styles/assets/avatar/avatar1.jpeg'

export default function MainAvatar() {
  return (
    <div className="absolute text-left right-10 z-10 md:right-12 mt-10 cursor-pointer">
      <Tooltip 
      content="Username"
      placement="bottom"
      trigger="hover"
      animation="duration-300"
      // eslint-disable-next-line react/style-prop-object
      style="light"
      arrow={false}>
        <Avatar
            img={avatar1}
            size="lg"
            rounded={true}
        />
      </Tooltip>
    </div>
  )
}