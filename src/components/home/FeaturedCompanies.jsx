import React from 'react'

export default function FeaturedCompanies() {

  const companies = [
    { name: 'Google', logo: '🔵', jobs: '120 jobs' },
    { name: 'Microsoft', logo: '🟦', jobs: '95 jobs' },
    { name: 'Amazon', logo: '🟠', jobs: '200 jobs' },
    { name: 'Meta', logo: '🔷', jobs: '80 jobs' },
    { name: 'Apple', logo: '⚫', jobs: '60 jobs' },
    { name: 'Netflix', logo: '🔴', jobs: '45 jobs' },
  ]

  return (
    <section className='py-16'>
      <h2 className='text-3xl font-bold text-center mb-10'> 
        Featured Companies 
      </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {companies.map((company) => (
            <div className='flex flex-col items-center p-6 rounded-xl border hover:shadow-lg' key={company.name}>
              <p className='text-5xl mb-3'>
                {company.logo}
              </p>
              <p className='font-bold text-lg'>
                {company.name}
              </p>
              <p className='text-sm text-gray-500'>
                {company.jobs}
              </p>
            </div>
          ))}
        </div>
    </section>
  )
}
