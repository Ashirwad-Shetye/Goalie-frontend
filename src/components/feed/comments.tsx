import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import CommentData from './commentData'



interface Props{
    open: boolean;
    onClose: any;
    children: any;
}

function CloseOnClick({open, children}:Props){

    if(!open) return null;

    return(
        <div className='my-2 max-h-48 overflow-y-scroll scroll scrollbar-thin scrollbar-thumb-10 
        scrollbar-thumb-gray-300 scrollbar-track-transparent'>
            <div className='w-11/12 mx-auto'>
                {children}
            </div>
        </div>
    )
}

const Data = [
    {title: 'Username 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`},
    {title: 'Username 2',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`},
    {title: 'Username 3',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`},
    {title: 'Username 4',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`},
    {title: 'Username 5',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`},
];


function Comments() {

    
    // const { title, content } = commentData;

    const [isActive, setIsActive] = useState(false);

  return (
    <>
        <div onClick={() => setIsActive(!isActive)}>            
            <div >
                <div className='pb-2'>{isActive ? (
                    <div className='flex space-x-5'>
                        <h1 className='cursor-pointer text-gray-400'>Hide comments</h1>
                        <FaChevronUp className='text-2xl cursor-pointer justify-center text-gray-300 align-middle'/>
                    </div>
                    ) : (
                    <div className='flex space-x-5'>
                        <h1 className='cursor-pointer text-gray-400'>Show comments</h1>
                        <FaChevronDown className='text-2xl cursor-pointer my-auto justify-center text-gray-300 align-middle'/>
                    </div>
                    )}
                </div>
            </div>
            <CloseOnClick open={isActive} onClose={() => setIsActive(false)}>
                {isActive && 
                    Data.map((user) => <CommentData userName={user.title} comment={user.content} />)
                }        
            </CloseOnClick>
        </div>
    </>
  )
}


export default Comments