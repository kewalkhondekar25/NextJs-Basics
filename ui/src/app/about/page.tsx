//how to create pages
import React from 'react'
import Link from "next/link";


const page = () => {
  return (
    <div className='flex flex-col '>
      <h3>this is about page</h3>
      <Link href="/" className='underline text-blue-500'>go to home page</Link>
    </div>
  )
}

export default page