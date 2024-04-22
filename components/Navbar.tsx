import Link from 'next/link'
import { it } from 'node:test'
import React from 'react'

let menu = [
    {href: "/client", label: "client"},
    {href: "/drinks", label: "drinks"},
    {href: "/tasks", label: "tasks"},
    {href: "/query", label: "query"}
]

const Navbar = () => {
  return (
    <div className='bg-slate-200 py-4'>
      <div>
        <ul className='flex mx-3 gap-3'>
            {
                menu.map(item => {
                    return(
                        <li>
                            <Link href={item.href} key={item.label}
                            className='capitalize text-slate-300'>{item.label}</Link>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
