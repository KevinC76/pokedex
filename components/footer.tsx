import React from 'react'

function Footer() {


  return (
    <div className='bg-white w-full px-64 py-4 flex items-center justify-center'>
      <p className='font-medium text-lg'>@{new Date().getFullYear()}. All Rights Reserved</p>
    </div>
  )
}

export default Footer