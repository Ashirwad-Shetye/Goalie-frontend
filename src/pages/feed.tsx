import React from 'react'
import PostCreate from '../common/postCreateButton';
import Header from '../components/feed/header'
import PostCard from '../components/feed/postCard';
import UsersList from '../components/feed/usersList';

function Feed() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen'>
      <Header />
      <div className='container bg-blue-200'>
        <div className='bg-red-200 mt-10 w-screen'>
          <UsersList/>
          <PostCard />
        </div>
        <PostCreate />
      </div>
    </div>
  )
}

export default Feed