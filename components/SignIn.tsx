"use client"
import { log } from 'console';
import React, { useState } from 'react'

const SignIn = () => {
    
    const [data, setData] = useState({
        userName: "",
        password: ""
    });

    const handleUserName = (e: any) => {
        setData(prev => ({...prev, userName: e.target.value }))
    }
    const handlePwd = (e: any) => {
        setData(prev => ({...prev, password: e.target.value }))
    }
    const handleSignIn = () => {
        console.log(data);
        alert(`username: ${data.userName}, pwd: ${data.password}`)
    }
  return (
    <div>
        <dl>
            <dt>User Name</dt>
            <dd>
                <input type="text" className='bg-slate-100 border border-gray-500'
                onChange={handleUserName} />            
            </dd>
            <dt>Pasword</dt>
            <dd>
                <input type="password" className='bg-slate-100 border border-gray-500' 
                onChange={handlePwd}/>            
            </dd>
        </dl>
        <button className='bg-teal-600 w-56 mt-3'
        onClick={handleSignIn}>
            Sign In
        </button>
    </div>
  )
}

export default SignIn