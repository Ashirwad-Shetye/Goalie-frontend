import React from 'react'

interface Props {
    userName: string;
    comment: string;
}

function CommentData({userName, comment}: Props) {
  return (
    <div className="mx-2 my-2 border-b-gray-200 border-b-2">
        <div className='font-lato font-semibold pb-1' >{userName}</div>
        <div className='text-gray-600 pb-2'>{comment}</div>
    </div>
  )
}

export default CommentData