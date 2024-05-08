import React from 'react'

const SignUp = () => {
  return (
    <div>
        <dl>
            <dt>User Name</dt>
            <dd>
                <input type="text" className='bg-slate-100 border border-gray-500' />            
            </dd>
            <dt>Email</dt>
            <dd>
                <input type="text" className='bg-slate-100 border border-gray-500' />            
            </dd>
            <dt>Password</dt>
            <dd>
                <input type="password" className='bg-slate-100 border border-gray-500' />            
            </dd>
        </dl>
        <button className='bg-teal-600 w-56 mt-3'>
            Sign Up
        </button>
    </div>
  )
}

export default SignUp