"use client"
import React, { useContext, useState } from 'react'
import { PiAndroidLogoFill } from "react-icons/pi";
import Link from 'next/link';
import { themeContext } from '@/context/ThemeContext';
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {

  const {Theme, toggleTheme} = useContext(themeContext);

  const savedCount = useSelector((state) =>{    return state.savedJobs.savedJobs.length;
})

  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <nav className={`flex justify-between items-center
      px-6 py-4 shadow-md sticky top-0 z-50
      ${Theme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <span className="flex items-center gap-2 text-xl font-bold">
          <PiAndroidLogoFill />
          Job-Portal
        </span>
        <span className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
        <Link href="/jobs" className="hover:text-blue-500 transition-colors">Jobs</Link>
        <Link href="/post-job" className="hover:text-blue-500 transition-colors">Post-Job</Link>
        <Link href="/saved-jobs" className="hover:text-blue-500 transition-colors">Saved-Job</Link>
        <Link href="/profile" className="hover:text-blue-500 transition-colors">Profile</Link>
        </span>
        <span className="flex items-center gap-4">
          <span>
            <button onClick={toggleTheme}>
              {Theme ? <CiSun /> : <FaMoon />}
            </button>
          </span>
          <span>
              <BsBookmark />
              { savedCount > 0 && 
                <span>
                  {savedCount}
                </span>
              }
          </span>
        </span>
        <span className="md:hidden cursor-pointer text-xl">
          <CiMenuBurger onClick={() => setisOpen(!isOpen)}/>
        </span>
      </nav>

      <div>
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/jobs" className="hover:text-blue-500 transition-colors">Jobs</Link>
            <Link href="/post-job" className="hover:text-blue-500 transition-colors">Post-Job</Link>
            <Link href="/saved-jobs" className="hover:text-blue-500 transition-colors">Saved-Job
            </Link>
            <Link href="/profile" className="hover:text-blue-500 transition-colors">Profile</Link>
          </div>
        )}
      </div>
    </>
  )
}
