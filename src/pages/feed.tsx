import React from 'react'
import PostCreate from '../common/postCreateButton';
import Header from '../components/feed/header'
import PostCard from '../components/feed/postCard';
import UsersList from '../components/feed/usersList';

function Feed() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
      min-h-screen min-w-screen max-h-fit max-w-screen'>
      <Header />
      <PostCreate />
      <div className='container relative top-8 md:flex w-fit mx-auto h-[540px] justify-center
       content-center grid md:grid-rows-1 space-y-2 md:space-y-0 md:space-x-5 lg:space-x-10'>
        <UsersList/>
        <PostCard />
      </div>
    </div>
  )
}

export default Feed