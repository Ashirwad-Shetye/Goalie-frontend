import React, { lazy, Suspense } from "react";
import PostCreate from "../common/postCreateButton2";
import Header from "../common/header";
import Navs from "../components/feed/navs";

const UsersList = lazy(() => import("../components/feed/usersList"));
const PostCard = lazy(() => import("../components/feed/postCard"));

function Feed() {
  return (
    <div className="bg-dashboard bg-right bg-no-repeat bg-cover h-screen min-h-[640px] bg-fixed z-0">
      <main className="max-w-[1200px] w-full md:w-11/12 md:h-full min-w-screen mx-auto flex flex-col justify-center items-center">
        <Header>
          <Navs />
        </Header>
        <PostCreate />
        <div
          className="container relative top-8 md:flex justify-center items-center w-full mx-auto h-[540px]
       content-center grid md:grid-rows-1 space-y-2 md:space-y-0 md:space-x-5 lg:space-x-10"
        >
          <Suspense>
            <UsersList />
          </Suspense>
          <Suspense>
            <PostCard />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default Feed;
