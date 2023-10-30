import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='border border-b-1'>
            <ul className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
                <li className='flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <input type='text' placeholder='Search Books....' className='outline-none'/>
                </li>
                <Link to='/' className='flex items-center gap-3 md:-ml-32 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                  <span className='text-2xl font-bold text-primary hidden md:block'>
                    BookStore
                  </span>
                </Link>
                <li className='flex gap-3 items-center'>
                  <Link to="/create" className='text-white bg-primary px-2 py-1 rounded-2xl flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className='hidden md:block'>Create Book</span>
                  </Link>
                  <div className='w-12'>
                    <img src='https://dotesports.com/wp-content/uploads/2023/08/invoker-dota-2.jpg?resize=1536,864' alt='profile' className='w-full rounded-full'/>
                  </div>
                </li>
            </ul>
        </nav>
  )
}
