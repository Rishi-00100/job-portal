import React, { useState } from 'react'

export default function JobFilters({ onFilter }) {

  const [jobType, setjobType] = useState("")
  const [category, setcategory] = useState("")

  const handleFilter = (type, value) => {
    if(type === 'jobType') {
      onFilter({ jobType: value, category })
    } else {
      onFilter({ jobType, category: value })
    }
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center">
        <select className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" value = {jobType} onChange={(e) => {
          setjobType(e.target.value)
          handleFilter('jobType', e.target.value)
        }}>
          <option value="">All Types</option>
          <option value="full_time">Full Time</option>
          <option value="part_time">Part Time</option>
          <option value="contract">Contract</option>
        </select>
        <select className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" value={category} onChange={(e) => {
          setcategory(e.target.value)
          handleFilter('category', e.target.value)
        }}>
          <option value="">All Categories</option>
          <option value="software-dev">Software Dev</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="data">Data Science</option>
        </select>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={(e) => {
          setjobType("")
          setcategory("")
          onFilter("")
        }}>
          Clear Filter
        </button>
      </div>
    </>
  )
}
