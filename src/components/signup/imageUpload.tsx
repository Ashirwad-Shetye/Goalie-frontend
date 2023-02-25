import React, { useState, useRef, MutableRefObject } from "react";
import convertFileToBase64 from "../../features/fileConvert";

function ImageUpload({ setAvatarImg }: any) {
  const imgRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [uploadImg, setUploadImg] = useState<any>("");
  const [image, setImage] = useState(false);
  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    imgRef.current.click();
  };

  const handleFileUpload = async (e: any) => {
    e.preventDefault();
    setImage(true);
    const file = e.target.files[0];
    setUploadImg(URL.createObjectURL(file));
    const base64 = await convertFileToBase64(file);
    setAvatarImg(base64);
  };
  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={handleClick}
        className="rounded-full bg-orange-300 w-32 h-32 flex flex-col justify-center items-center font-poppins 
      text-white cursor-pointer hover:scale-105 duration-150 hover:shadow-md overflow-hidden"
      >
        {image ? (
          <>
            <img
              width={400}
              height={300}
              src={uploadImg}
              alt=""
              className="h-full"
            />
          </>
        ) : (
          <div className="">
            <h1>Upload your</h1>
            <h1>profile pic</h1>
          </div>
        )}
      </button>
      <input
        type="file"
        ref={imgRef}
        name="avatar"
        className="hidden"
        accept=".jpeg, .png, .jpg"
        onChange={handleFileUpload}
      />
    </div>
  );
}

export default ImageUpload;
