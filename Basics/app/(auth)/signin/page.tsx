import SignIn from '@/components/SignIn'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center place-items-center'>
      <SignIn/>
      <p>New User?
        <Link className='text-blue-800' href="/signup">
          <span className='underline'> Signup</span>
        </Link>
      </p>
    </div>
  )
}

export default page
