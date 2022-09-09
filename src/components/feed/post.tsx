import React, { useState} from 'react'
import { Avatar } from 'flowbite-react'
import avatar1 from '../../styles/assets/avatar/avatar1.jpeg'
import post1 from '../../styles/assets/placeholders/post1.jpg'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
// import axios from 'axios'



function Post() {

    // const [alreadyLiked, setAlreadyLiked] = useState(false)

    // const handleLike = () => {
    //     if (alreadyLiked) {
    //         setAlreadyLiked(true)
    //     }
    // }

  return (
    <div className='w-11/12 mx-auto py-5 bg-red-200'>
        <div className=''>
            <div className='flex space-x-5 '>
                <Avatar
                    img={avatar1}
                    size="lg"
                    rounded={true}
                />
                <div className='my-auto'>
                    <h1 className=' text-xl'>Username</h1>
                    <h2 className='text-sm text-gray-500 font-lato font-semibold'> Posted on: 9-9-22</h2>
                </div>  
            </div>
            <h1 className='w-11/12 mx-auto mt-2'>Aiming to complete 5 treks this year with my pup.</h1>
            <img 
                src={post1} 
                alt="post"
                className='w-full my-5' />
        </div>
        {/* <button
            onClick={handleLike}
        >
            {alreadyLiked ? (
               <div>
                    <AiOutlineHeart />
               </div> 
            ):(
                <div>
                    <AiFillHeart />
               </div>
            )}
        </button> */}
    </div>
  )
}

export default Post