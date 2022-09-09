import React from 'react'
import Post from './post'

function PostCard() {
  return (
    <div className=''>
        <div className='bg-blue-200 container mt-40 md:mt-0 mx-auto rounded-3xl justify-center align-middle h-[540px] w-[360px]
            shadow-lg overflow-y-scroll scrollbar-hide'>
               <Post/>
               <Post/>
        </div>
    </div>
  )
}

export default PostCard