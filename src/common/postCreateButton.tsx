import React from 'react'
import { useState, useRef } from 'react'
import {BsFilePost} from 'react-icons/bs'
import PostFormModal from '../components/feed/postFormModal'
import { GrFormClose } from 'react-icons/gr'


function PostCreate() {

    const [isOpen, setIsOpen] = useState(false)    

    const textRef = useRef<any>();

    const onChangeHandler = function(e: React.SyntheticEvent<EventTarget>) {
     const target = e.target as HTMLTextAreaElement;
     textRef.current.style.height = "30px";
     textRef.current.style.height = `${target.scrollHeight}px`;
    };

  return (
    <div className="fixed bottom-0 md:bottom-12 right-12 z-10">
        <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-8 md:bottom-0 right-0 flex items-center justify-center bg-orange-500 text-4xl text-white h-16 w-16
            rounded-full cursor-pointer shadow-xl hover:scale-105 hover:duration-300">
                < BsFilePost />
        </button>
        <PostFormModal open={isOpen} onClose={() => setIsOpen(false)}>
            <button
                onClick={() => setIsOpen(false)}
                className="absolute right-[84px] mt-4 text-3xl hover:bg-orange-300 rounded-full">
                < GrFormClose />
            </button>
            <h1 className="text-2xl mx-auto w-11/12 text-center font-lato font-semibold py-4
                border-b-2">Create Post</h1>
            <div className="w-10/12 mx-auto flex flex-col">
                <label className="text-xl font-lato font-semibold my-4">Upload your photo</label>
                <input 
                    type="file" 
                    name="upload"
                    className=""/>
            </div>
            <div className="w-10/12 mx-auto flex flex-col">
                <label className="text-xl font-lato font-semibold my-4">Description</label>
                <textarea  
                    maxLength={280}
                    name="description"
                    ref={textRef}
                    onChange={onChangeHandler}
                    className="rounded-3xl scrollbar-hide focus:ring-2 resize-none focus:border-white  focus:ring-orange-500"/>
            </div>
            <div className="my-2 py-5 text-center">
                <button
                    className="rounded-full mx-auto h-10 px-4 w-24 bg-orange-500 text-white text-2xl hover:bg-white hover:text-orange-500
                        hover:border-orange-500 hover:border-2"
                >Post</button>
            </div>
        </PostFormModal>
    </div>
  )
}

export default PostCreate