import React from 'react'

interface Props{
    open: boolean;
    onClose: any;
    children: any;
}

function PostFormModal({open, children}:Props) { 

    if(!open) return null;

  return (
    <div className="bg-white rounded-2xl mb-8 md:mb-0 shadow-lg h-full mr-20 ">
        {children}
    </div>
  )
}

export default PostFormModal