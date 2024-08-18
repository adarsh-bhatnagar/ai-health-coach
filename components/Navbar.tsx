"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

const routes = [
        {
            name: 'Chat',
            path: '/'
        },
        {
            name: 'Profile',
            path: '/profile'
        }
]

const DotIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    )
  }

const Navbar = () => {
    const pathname = usePathname();
  return (
    
    <div className='p-4 flex flex-row justify-between items-center bg-black text-white'>
        <Link href='/'>
            <h1 className='text-2xl font-bold'>My Health</h1>
        </Link>
        <div className='flex gap-x-6 items-center text-lg'>
          {
            routes.map((route, idx) => {
              return <Link 
              href={route.path} 
              key={idx}
              className={pathname === route.path ? 'border-b-2 border-yellow-500' : ''}
              >
                { route.name }</Link>
            })
          }
    <UserButton>
        <UserButton.MenuItems>
          <UserButton.Action label="signOut" />
          <UserButton.Link
            label="Create organization"
            labelIcon={<DotIcon />}
            href="/create-organization"
          />
          <UserButton.Action label="manageAccount" />
        </UserButton.MenuItems>
    </UserButton>
        </div>
    </div>
  )
}

export default Navbar