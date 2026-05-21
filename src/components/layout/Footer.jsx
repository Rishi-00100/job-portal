"use client"
import React, { useContext } from 'react'
import { PiAndroidLogoFill } from "react-icons/pi";
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { themeContext } from '@/context/ThemeContext';


export default function Footer() {

  const {Theme} = useContext(themeContext);

  return (
    <>
    <div className={`px-6 py-12 mt-auto border-t ${Theme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <span className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        <span className='flex flex-col gap-3'>
          <span className='flex items-center gap-2 text-xl font-bold'>
            <PiAndroidLogoFill />
            Connecting talent with opportunity.
          </span>
          <span className='flex gap-4 text-2xl mt-2 cursor-pointer'>
            <FaGithub className='hover:text-blue-500'/>
            <FaLinkedin className='hover:text-blue-500'/>
          </span>
        </span>
        <span className='flex flex-col gap-2 text-sm'>
          <p className="font-semibold text-base mb-2">
            For Job Seekers
          </p>
          <Link href="/jobs" className="hover:text-blue-500 transition-colors">Browse Jobs</Link>
          <Link href="/saved-jobs" className="hover:text-blue-500 transition-colors">Saved-Job</Link>
          <Link href="/profile" className="hover:text-blue-500 transition-colors">Create Profile</Link>
        </span>
        <span className='flex flex-col gap-2 text-sm'>
          <p className="font-semibold text-base mb-2">
            For Employers
          </p>
          <Link href="/post-job" className="hover:text-blue-500 transition-colors">Post-Job</Link>
        </span>
        <span className='flex flex-col gap-2 text-sm'>
          <p className="font-semibold text-base mb-2">
            For Contacting Us
          </p>
          <Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </span>
      </span>
      <div className='max-w-6xl mx-auto mt-8 pt-4 border-t text-sm text-center text-gray-500'>
        © {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </div>
    </>
  )
}