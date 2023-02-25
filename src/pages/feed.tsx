import React, { lazy, Suspense, useState } from "react";
import PostCreate from "../common/postCreateButton2";

const UsersList = lazy(() => import("../components/feed/usersList"));
const PostCard = lazy(() => import("../components/feed/postCard"));
const Navbar = lazy(() => import("../common/navbar"));
const PostFormModal = lazy(() => import("../components/feed/postFormModal"));
const UserTag = lazy(() => import("../common/userTag"));

function Feed() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dashboard bg-right bg-no-repeat bg-cover h-screen min-h-[640px] bg-fixed z-0">
      <PostFormModal open={isOpen} setIsOpen={setIsOpen} />
      <div className="h-full md:flex">
        <div className="relative h-[10vh] min-h-16 w-full md:h-full md:w-[8rem] z-50 md:z-40">
          <Suspense>
            <Navbar />
          </Suspense>
        </div>
        <main className="max-w-[1200px] relative w-full md:w-11/12 h-[90vh] md:h-[100vh] min-w-screen mx-auto flex flex-col justify-center items-center">
          <PostCreate open={isOpen} setIsOpen={setIsOpen} />
          <div className="w-full md:space-y-10">
            <div className="hidden absolute top-0 w-full h-16 md:flex items-end justify-between">
              <h1 className="font-poppins text-2xl ml-10 text-gray-300 hover:text-gray-500 duration-150">
                Social Feed
              </h1>
              <div className="shadow-lg -mb-2 mr-10 rounded-full flex w-[11rem] justify-between bg-white">
                <Suspense>
                  <UserTag />
                </Suspense>
              </div>
            </div>
            <div
              className="relative flex-grow lg:grid lg:grid-cols-3 justify-center items-center md:w-11/12 mx-auto 
            lg:content-around lg:space-x-10"
            >
              <Suspense>
                <UsersList />
              </Suspense>
              <Suspense>
                <PostCard />
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Feed;
