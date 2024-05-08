"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

  const [count, setCount] = useState(0);
  return (
    <div>
      <p>this is client page</p>
      <div className='flex'>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <Link href="/">go to home</Link>
    </div>
  )
}

export default page