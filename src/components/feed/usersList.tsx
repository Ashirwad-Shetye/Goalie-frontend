import userEvent from '@testing-library/user-event'
import React from 'react'

const data = [
  {
    name: 'Bob',
    avatar: './file/'
  }
]

function UsersList() {
  return (
    <div className='bg-red-200 mx-20'>
      <h1 className='text-3xl font-lato font-bold'>Recent Users</h1>
      <User/>
    </div>
  )
}

function User(){
  return(
    <div>
      {/* {data.map(user) => {
        return (
          <h1>{user.name}</h1>
        )
      } */}
    </div>
  )
}

export default UsersList