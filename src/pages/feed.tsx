import React from 'react'
import PostCreate from '../common/postCreateButton';
import Header from '../components/feed/header'
import PostCard from '../components/feed/postCard';
import UsersList from '../components/feed/usersList';

function Feed() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen justify-center align-middle'>
      <Header />
      <div className=''>
        <UsersList/>
        <PostCard />
      </div>
      <PostCreate />
    </div>
  )
}

export default Feed