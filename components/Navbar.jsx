import React from 'react'
import  Link  from 'next/link'


 const Navbar = () => {
  return (

    <nav className="bg-slate-700 text-center p-4 text-2xl">
      <ul className='flex justify-center '>
        <li className='m-2 text-red-600-700 hover:text-sky-700 hover:duration-700'>
          <Link href="/">Home</Link>
        </li>
        <li className='m-2 text-red-600-700 hover:text-sky-700 hover:duration-700'>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
