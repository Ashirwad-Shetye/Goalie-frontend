import React, { MutableRefObject } from "react";
import { useState, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import imageUpload from "../../styles/assets/placeholders/imgUpload.png";
import { ThreeDots } from "react-loader-spinner";
import convertFileToBase64 from "../../features/fileConvert";

interface Props {
  open: boolean;
  setIsOpen: any;
}

function PostFormModal({ open, setIsOpen }: Props) {
  if (!open) return null;
  // const [formData, setFormData] = useState({
  //   uploadedImage: "",
  //   description: "",
  // });

  // const { uploadedImage, description } = formData;

  // const [img, setImg] = useState({ myFile: "" });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  // const imgRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertFileToBase64(file);
    console.log(base64);
    // setFormData({ uploadedImage: image, description });
    // console.log(formData);
  };

  // const createPost = async (newImage: any) => {
  //   try {
  //     await setNewPost(newImage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // createPost(formData);
  };

  return (
    <div className="fixed z-50 w-screen h-screen flex justify-center items-center border border-green-400 backdrop-blur-md">
      <div className="bg-white rounded-2xl shadow-xl min-h-fit max-h-[650px] w-10/12 min-w-fit max-w-lg">
        <form onSubmit={onSubmit}>
          <div className="flex h-12 justify-between items-center border-b-2">
            <h1 className="text-2xl ml-5 h-fit font-lato text-gray-400 font-semibold">
              Create Post
            </h1>
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl flex justify-center mr-1 items-center hover:bg-orange-500/30 w-10 h-10 rounded-full"
            >
              <GrFormClose />
            </button>
          </div>
          <div className="w-10/12 mx-auto flex flex-col">
            <label className="text-xl text-center font-lato font-semibold my-4 text-gray-600">
              Upload your photo
            </label>
            <img
              src={imageUpload}
              alt="upload photos here"
              className="w-40 max-w-xl object-cover object-center mx-auto mb-5"
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                // imgRef.current.click();
              }}
              className="w-fit h-10 text-lg px-3 mx-auto rounded-full bg-gray-400"
            >
              Upload Image
            </button>
            <input
              type="file"
              className="hidden"
              // ref={imgRef}
              // value={uploadedImage}
              accept="image.jpg, image.png, image.jpg"
              onChange={handleFileUpload}
            />
          </div>
          <div className="w-10/12 mx-auto flex flex-col">
            <label className="text-xl text-center font-lato font-semibold my-4 text-gray-600">
              Description
            </label>
            <textarea
              maxLength={280}
              name="description"
              // value={description}
              className="rounded-lg scrollbar-hide focus:ring-2 resize-none focus:border-white  focus:ring-orange-500"
            />
          </div>
          <div className="my-2 py-5 text-center">
            {isButtonLoading ? (
              <button
                type="submit"
                className="rounded-full mx-auto h-10 px-4 w-24 bg-orange-500 text-white text-2xl"
              >
                <ThreeDots
                  height="15"
                  width="70"
                  radius="3"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-full mx-auto h-10 px-4 w-24 bg-orange-500 text-white text-2xl hover:bg-white hover:text-orange-500
                        hover:border-orange-500 hover:border-2 duration-200"
              >
                Post
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostFormModal;
