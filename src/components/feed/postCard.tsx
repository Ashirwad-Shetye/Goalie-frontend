import React from 'react'
import Post from './post'

function PostCard() {
  return (
    <div className=''>
        <div className='container mx-auto rounded-3xl justify-center align-middle h-[450px] md:h-[540px] w-[360px]
            shadow-lg overflow-y-scroll scrollbar-hide'>
               <Post/>
               <Post/>
               <Post/>
               <Post/>
               <Post/>
               <Post/>
        </div>
    </div>
  )
}

export default PostCard