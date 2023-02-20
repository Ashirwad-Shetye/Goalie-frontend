import React, { useRef, useState } from "react";
import { Avatar } from "flowbite-react";
import avatar1 from "../../styles/assets/avatar/avatar1.jpeg";
import post1 from "../../styles/assets/placeholders/post1.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TiChevronRightOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import Comment from "./comments";

function Post() {
  const [alreadyLiked, setAlreadyLiked] = useState<boolean>();

  const handleLike = () => {
    if (alreadyLiked) {
      setAlreadyLiked(false);
      toast("🙁 You have disliked this post", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else if (!alreadyLiked) {
      setAlreadyLiked(true);
      toast("❤️ You have liked this post", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const textRef = useRef<any>();

  const onChangeHandler = function (e: React.SyntheticEvent<EventTarget>) {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = "30px";
    textRef.current.style.height = `${target.scrollHeight}px`;
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    toast("Comment submitted successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="">
        <div className="flex space-x-5 ">
          <div className="border-2 border-gray-200 rounded-full">
            <Avatar img={avatar1} size="lg" rounded={true} />
          </div>
          <div className="my-auto">
            <h1 className=" text-xl">Username</h1>
            <h2 className="text-sm text-gray-500 font-lato font-semibold">
              {" "}
              Posted on: 9-9-22
            </h2>
          </div>
        </div>
        <h1 className="w-11/12 mx-auto mt-2">
          Aiming to complete 5 treks this year with my pup.
        </h1>
        <img src={post1} alt="post" className="w-full my-5" />
      </div>
      <div className="py-2 flex justify-between items-center">
        <button
          onClick={handleLike}
          className="text-3xl text-red-500 hover:scale-105 duration-200"
        >
          {alreadyLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
        <textarea
          maxLength={280}
          name="description"
          placeholder="Comment"
          ref={textRef}
          onChange={onChangeHandler}
          className="rounded-3xl w-full mx-4 h-10 border-gray-300 scrollbar-hide focus:ring-2 resize-none focus:border-white
                          focus:ring-orange-500 focus:ring-opacity-25"
        />
        <button
          onClick={onSubmit}
          className="bg-orange-400 bg-opacity-50 hover:bg-opacity-100 text-white rounded-full w-[4rem] h-10 flex justify-center 
          items-center text-3xl hover:text-white duration-150"
        >
          <TiChevronRightOutline className="mx-auto" />
        </button>
      </div>
      <Comment />
      <svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          stroke="gray"
          strokeWidth="0.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export default Post;
