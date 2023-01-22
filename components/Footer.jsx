import React from 'react'
import Link from 'next/link'
import { SiTypo3 } from "react-icons/si";

import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from 'react-icons/bs'

 const Footer = () => {
    return (
      <div className=' flex flex-col justify-center items-center p-4 bg-gray-800 '>
        <section className='flex  flex-col justify-center items-center text-center text-white mb-4 p-6'>
          <h1 className='text-4xl mb-6 font-poppins'>Welcome To Our Football Club and Join Us!</h1>
          <p className='text-3xl mb-6 font-poppins'>You can subscrip any time.</p>
          <div className='flex justify-center items-center max-w-3xl'>
            <input className='min-w-full px-4 py-2   text-black outline-4' type="mail"  placeholder='Type Your Email Here...' />
            <button className="border-2 ml-4 p-2">
              Subscrip
            </button>
          </div>
        </section>
        <div className='flex justify-center w-full max-w-full mt-10 mb-10'>
          <div className='flex'>
            <div className='flex flex-col items-start mx-10 w-40 text-white'>
              <h2 className='text-2xl font-bold mb-2'>About Us</h2>
              <Link  href={'/'}>How it works</Link>
              <Link  href={'/'}>About Teams</Link>
              <Link  href={'/'}>Docs</Link>
            </div>
            <div className='flex flex-col items-start mx-10 w-40 text-white'>
              <h2 className='text-2xl font-bold mb-2'>Contact Us</h2>
              <Link href={'/'}>Contact</Link>
              <Link href={'/'}>Support</Link>
              <Link href={'/'}>Help</Link>
            </div>
            <div className='flex flex-col items-start mx-10 w-40 text-white'>
              <h2 className='text-2xl font-bold mb-2'>Resources</h2>
              <Link href={'/'}>Blog</Link>
              <Link href={'/'}>Learn More</Link>
            </div>
            <div className='flex flex-col items-start mx-10 w-40 text-white'>
              <h2 className='text-2xl font-bold mb-2'>Join Us</h2>
              <Link href={'/'}>Get Started</Link>
              <Link href={'/'}>Subscrip</Link>
            </div>
          </div>
        </div>
        <section className='w-screen '>
          <div className='flex justify-between items-center w-full max-w-screen mt-12 '>
            <div className='text-white justify-self-start ml-12 cursor-pointer text-2xl flex items-center '>
              <Link className='flex' href="/">Swe-Uyghur FC <SiTypo3 className="pl-2 text-3xl" /></Link>
            </div>
            <small className=" text-white flex justify-center items-center">SweUyghur © 2022</small>
            <div className='flex justify-between items-center w-60 mr-12 justify-items-start'>
              <Link className='social-icon-link facebook' href="/"
              target="_blank"
              area-aria-label='Facebook'
              >
                <BsFacebook className='text-4xl text-white' />
              </Link>
              <Link className='social-icon-link instagram' href="/"
              target="_blank"
              area-aria-label='Instagram'
              >
                <BsInstagram  className='text-4xl text-white'/>
              </Link>
              <Link className='social-icon-link youtube' href="/"
              target="_blank"
              area-aria-label='Youtube'
              >
                <BsYoutube  className='text-4xl text-white'/>
              </Link>
              <Link className='social-icon-link twitter' href="/"
              target="_blank"
              area-aria-label='Twitter'
              >
               <BsTwitter  className='text-4xl text-white'/>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

export default Footer