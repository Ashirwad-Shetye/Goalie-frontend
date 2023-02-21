import React, { lazy, Suspense } from "react";
const Post = lazy(() => import("./post"));

function PostCard() {
  return (
    <div
      className="bg-white mx-auto rounded-3xl h-[80vh] w-10/12 max-w-[30rem] md:max-w-[40rem] lg:col-span-2
        shadow-xl overflow-auto scrollbar-hide place-self-center"
    >
      <Suspense>
        <Post />
      </Suspense>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostCard;
