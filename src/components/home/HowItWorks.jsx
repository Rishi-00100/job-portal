"use client"
import { themeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

export default function HowItWorks() {

  const { Theme } = useContext(themeContext);

  const steps = [
    { step: '01', title: 'Search Jobs', 
      desc: 'Browse thousands of jobs' },
    { step: '02', title: 'Apply Online', 
      desc: 'Submit your application easily' },
    { step: '03', title: 'Get Hired', 
      desc: 'Land your dream job' },
  ]

  return (
    <section className={`py-16 bg-gray-50 ${Theme ?'bg-gray-800 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'}`}>
      <h2 className='text-3xl font-bold text-center mb-10 text-black'>
         How It Works 
      </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {steps.map((step) => (
            <div className='flex flex-col items-center text-center p-6' key={step.step}>
              <p className='text-5xl font-extrabold text-blue-600 mb-4'>
                {step.step}
              </p>
              <p className='text-xl font-bold mb-2 text-gray-500'>
                {step.title}
              </p>
              <p className='text-gray-500'>
                {step.desc}
              </p>
            </div>
          ))} 
        </div>
    </section>
  )
}
