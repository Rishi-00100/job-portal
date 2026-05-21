import React from 'react'

export default function StatsCounter() {

  const stats = [
    { number: '10K+', label: 'Jobs Posted' },
    { number: '500+', label: 'Companies' },
    { number: '50K+', label: 'Candidates' },
    { number: '25K+', label: 'Placements' },
  ]

  return (
    <>
      <section className='py-16 bg-white dark:bg-gray-900'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat) => (
            <div className='text-center' key={stat.label}>
              <h2 className='text-4xl font-extrabold text-blue-600'>{stat.number}</h2>
              <p className='text-gray-500 mt-2'>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
