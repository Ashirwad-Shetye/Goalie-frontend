import React, { MutableRefObject } from "react";
import { useState, useRef } from "react";
import { BsFilePost } from "react-icons/bs";
import PostFormModal from "../components/feed/postFormModal";
import { GrFormClose } from "react-icons/gr";
import imageUpload from "../styles/assets/placeholders/imgUpload.png";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { setNewPost } from "../services/serverCalls";
import convertFileToBase64 from "../features/fileConvert";

function PostCreate() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    uploadedImage: "",
    description: "",
  });

  const { uploadedImage, description } = formData;

  // const [img, setImg] = useState({ myFile: "" });

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const textRef = useRef<any>();

  const imgRef = useRef() as MutableRefObject<HTMLInputElement>;

  const onChangeHandler = function (e: React.SyntheticEvent<EventTarget>) {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = "30px";
    textRef.current.style.height = `${target.scrollHeight}px`;
  };

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
    <div
      className={
        isOpen
          ? "absolute z-50 flex justify-center items-center backdrop-blur-md bg-gray-400/40 rounded-2xl"
          : "absolute flex justify-center items-center rounded-2xl"
      }
    >
      <div className="fixed bottom-0 md:bottom-12 right-12 z-10">
        <button
          onClick={() => setIsOpen(true)}
          className={
            isOpen
              ? "hidden"
              : "absolute bottom-8 md:bottom-0 right-0 flex items-center justify-center bg-orange-500 text-4xl text-white h-16 w-16 rounded-full cursor-pointer shadow-xl hover:scale-105 hover:duration-300"
          }
        >
          <BsFilePost />
        </button>
      </div>
      <PostFormModal open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={onSubmit}>
          <div className="flex justify-start h-12 items-center border-b-2">
            <h1
              className="text-2xl mx-auto h-fit text-center font-lato text-gray-700 font-semibold
                 absolute left-6"
            >
              Create Post
            </h1>
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl absolute right-0 flex justify-center items-center mr-2 hover:bg-orange-500/30 w-10 h-10 rounded-full"
            >
              <GrFormClose />
            </button>
          </div>
          <div className="w-10/12 mx-auto flex flex-col">
            <label className="text-xl font-lato font-semibold my-4">
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
                imgRef.current.click();
              }}
              className="w-fit h-10 text-lg px-3 mx-auto rounded-full bg-gray-400"
            >
              Upload Image
            </button>
            <input
              type="file"
              className="hidden"
              ref={imgRef}
              value={uploadedImage}
              accept="image.jpg, image.png, image.jpg"
              onChange={handleFileUpload}
            />
          </div>
          <div className="w-10/12 mx-auto flex flex-col">
            <label className="text-xl font-lato font-semibold my-4">
              Description
            </label>
            <textarea
              maxLength={280}
              name="description"
              ref={textRef}
              value={description}
              onChange={onChangeHandler}
              className="rounded-lg scrollbar-hide focus:ring-2 resize-none focus:border-white  focus:ring-orange-500"
            />
          </div>
          <div className="my-2 py-5 text-center">
            {isButtonLoading ? (
              <button
                type="submit"
                className="rounded-full mx-auto h-10 px-4 w-24 bg-orange-500 text-white text-2xl
                        hover:border-orange-500 hover:border-2"
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
                        hover:border-orange-500 hover:border-2"
              >
                Post
              </button>
            )}
          </div>
        </form>
      </PostFormModal>
    </div>
  );
}

export default PostCreate;
