import React, { useState } from 'react'

export default function JobSearch({ onSearch }) {

  const [query, setQuery] = useState("");

  return (
    <>
      <div className='w-full max-w-xl'>
        <input className='w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Search Jobs' onChange={(e) => {
          setQuery(e.target.value)
          onSearch(e.target.value)      
        }}
        value={query}
        />
      </div>
    </>
  )
}