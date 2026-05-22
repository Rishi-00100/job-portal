"use client"
import Link from 'next/link'
import React from 'react'
import { PiAndroidLogoFill } from "react-icons/pi";
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { saveJob, unsaveJob } from '@/store/slices/savedJobsSlice'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

export default function JobCard({ job }) {

  const dispatch = useDispatch()
  const savedJobs = useSelector(
    state => state.savedJobs.savedJobs
  )

  const isSaved = savedJobs.some(j => j.id === job.id)

  const handleSave = () => {
    isSaved ? dispatch(unsaveJob(job.id)) 
            : dispatch(saveJob(job))
  }

  return (
    <div
     className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >{<PiAndroidLogoFill />}
    <h3>{job.title}</h3>
    <p>{job.company_name}</p>
    <p>{job.candidate_required_location}</p>
      <div className="flex flex-wrap gap-2">
        <Badge text={job.job_type} color="blue"/>
      </div>  
      <div className="mt-2">
        {job.salary && <p>{job.salary}</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        {job.tags?.map(tag => (
          <Badge key={tag} text={tag} color="purple"/>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button onClick={handleSave}> 
          {isSaved ? <BsBookmarkFill /> : <BsBookmark />}
        </button>
        <Link href = {`/jobs/${job.id}`}>
          View Details 
        </Link>  
        <Button label="Apply Now"
                variant="primary"
                onClick={() => window.open(job.url)} />
      </div>
    </div>
  )
}
