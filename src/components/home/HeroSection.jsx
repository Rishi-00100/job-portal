"use client"
import React, { useContext } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { themeContext } from '@/context/ThemeContext'

export default function HeroSection() {

  const { Theme } = useContext(themeContext);

  const[query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/jobs?search=${query}`)
  }

  const popularTags = [
    'React', 'Node.js', 
    'Python', 'Java', 
    'UI/UX', 'DevOps'
  ]

  return (
    <>
    <section className={`min-h-screen flex items-center justify-center ${Theme ? 'bg-gray-800 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'}`}>
      <div>
        <h1 className='text-5xl font-extrabold mb-4 text-gray-900'>
          Search Jobs
        </h1>
        <p className='text-xl text-gray-600 mb-8'>
          Jobs that u want.
        </p>
        <div className='flex gap-2 mb-6'>
          <input className='flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 text-gray-500' type="text" placeholder='Search Jobs' value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700' onClick={handleSearch}>Search</button>
        </div>
        <div className='flex flex-wrap gap-2'>
          {popularTags.map((tag) => (
            <span className='px-3 py-1 bg-white text-gray-400 rounded-full text-sm cursor-pointer hover:bg-blue-500 hover:text-white' key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
