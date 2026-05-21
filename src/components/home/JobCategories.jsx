"use client"
import Link from 'next/link'
import React from 'react'

export default function JobCategories() {

  const categories = [
    { icon: '💻', name: 'Software Dev', count: '1.2K jobs' },
    { icon: '🎨', name: 'Design', count: '800 jobs' },
    { icon: '📱', name: 'Mobile', count: '600 jobs' },
    { icon: '📊', name: 'Data Science', count: '900 jobs' },
    { icon: '☁️', name: 'DevOps', count: '500 jobs' },
    { icon: '🔒', name: 'Cybersecurity', count: '400 jobs' },
    { icon: '📢', name: 'Marketing', count: '700 jobs' },
    { icon: '✍️', name: 'Writing', count: '300 jobs' },
  ]

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <Link className='flex flex-col items-center p-6 rounded-xl border hover:shadow-lg cursor-pointer transition-all' key={category.name}
            href={`/jobs?category=${category.name}`}
          >
            <div>
              <p className='text-4xl mb-3'>
                {category.icon}
              </p>
              <p className='font-semibold'>
                {category.name}
              </p>
              <p className='text-sm text-gray-500'>
                {category.count}
              </p>
            </div>
          </Link>  
        ))}
      </div>
    </>
  )
}
