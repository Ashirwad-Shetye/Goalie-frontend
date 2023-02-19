import React from "react";

function ImageUpload({ setModalOpen }: any) {
  const handleClick = () => {
    setModalOpen(true);
  };
  return (
    <div className="flex justify-center mt-5">
      <div
        onClick={handleClick}
        className="rounded-full bg-orange-300 w-32 h-32 flex flex-col justify-center items-center font-poppins 
      text-white cursor-pointer hover:scale-105 duration-150 hover:shadow-md"
      >
        <div className="">
          <h1>Choose your</h1>
          <h1>avatar</h1>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
