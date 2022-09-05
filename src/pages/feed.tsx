import React from 'react'
import PostCreate from '../common/postCreateButton';
import Header from '../components/feed/header'
import Posts from '../components/feed/posts';

function Feed() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen justify-center align-middle'>
      <Header />
      <Posts />
      <PostCreate />
    </div>
  )
}

export default Feed