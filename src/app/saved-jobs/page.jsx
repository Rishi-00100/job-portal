"use client"
import JobCard from '@/components/jobs/JobCard'
import EmptyState from '@/components/ui/EmptyState'
import React from 'react'
import { useSelector } from 'react-redux'
import { BsBookmark } from "react-icons/bs";


export default function page() {

  const savedJobs = useSelector(
    state => state.savedJobs.savedJobs
  )

  return (
    <main className="px-4 py-10 max-w-7xl mx-auto">
      <h1  className="text-3xl font-bold mb-2"> Saved Jobs </h1>
      <p className="text-gray-500 mb-8">
         {savedJobs.length} saved jobs
      </p>

      {savedJobs.length === 0 ? (
        <EmptyState 
          icon={<BsBookmark />}
          message="No saved jobs yet!"
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"> 
          {savedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  )
}
