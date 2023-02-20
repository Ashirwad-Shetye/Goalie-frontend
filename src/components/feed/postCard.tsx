import React from "react";
import Post from "./post";

function PostCard() {
  return (
    <div
      className="bg-white mx-auto rounded-3xl h-[80vh] w-10/12 max-w-[30rem] md:w-[450px] lg:col-span-3
        shadow-xl overflow-auto scrollbar-hide"
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
