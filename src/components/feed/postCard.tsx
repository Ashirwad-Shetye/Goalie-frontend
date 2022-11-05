import React from "react";
import Post from "./post";

function PostCard() {
  return (
    <div
      className="bg-white mx-auto rounded-3xl h-[450px] md:h-[540px] w-[360px] md:w-[450px] lg:w-[540px]
        shadow-xl overflow-y-scroll scrollbar-hide"
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostCard;
