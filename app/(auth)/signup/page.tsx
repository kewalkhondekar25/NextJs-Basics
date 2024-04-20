import SignUp from '@/components/SignUp'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center place-items-center'>
      <SignUp/>
      <p >Already User?
        <Link className='text-blue-800' href="/signin">
          <span className='underline'> Signin</span>
        </Link>
      </p>
    </div>
  )
}

export default page
