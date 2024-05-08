import Link from 'next/link';
import React from 'react'

interface LinksType {
  href: string;
  lable: string
}

const links: LinksType[] = [
  {
    href: "/client",
    lable: "client"
  },
  {
    href: "/drink",
    lable: "drink"
  },
  {
    href: "/task",
    lable: "task"
  },
  {
    href: "/query",
    lable: "query"
  }
]

const Navbar = () => {
  return (
    <nav className='flex justify-center place-content-center'>
      <ul className='flex '>
        {
          links.map(items => {
            return (
              <li className='ml-5 text-white' key={items.href} >
                <Link href={items.href}>{items.lable}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar