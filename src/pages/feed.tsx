import React from "react";
import PostCreate from "../common/postCreateButton";
import Header from "../common/header";
import PostCard from "../components/feed/postCard";
import UsersList from "../components/feed/usersList";
import Navs from "../components/feed/navs";

function Feed() {
  return (
    <div
      className="bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    min-h-screen min-w-screen max-h-fit max-w-screen"
    >
      <main className="max-w-[1200px] min-w-screen mx-auto">
        <Header>
          <Navs />
        </Header>
        <PostCreate />
        <div
          className="container relative top-8 md:flex w-fit mx-auto h-[540px] justify-center
       content-center grid md:grid-rows-1 space-y-2 md:space-y-0 md:space-x-5 lg:space-x-10"
        >
          <UsersList />
          <PostCard />
        </div>
      </main>
    </div>
  );
}

export default Feed;
