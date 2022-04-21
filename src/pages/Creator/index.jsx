import React from 'react'
import Landing from './Components/Landing/index';

function CreatorPage() {
  return (
    <div className=' w-screen h-screen items-center text-center py-5 '>
      <p className='text-orange-500'>How to be a creator</p>
      <h1 className='font-bold text-3xl'>Create and sell your collections</h1>
      <Landing></Landing>
    </div>
  )
}

export default CreatorPage