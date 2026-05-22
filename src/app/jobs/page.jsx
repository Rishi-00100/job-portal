"use client"

import useFetch from '@/hooks/useFetch'
import { setJobArr, setLoading, setErrorMsg } from '@/store/slices/jobsSlice'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobSearch from '@/components/jobs/JobSearch'
import JobFilters from '@/components/jobs/JobFilters'
import SkeletonLoader from '@/components/jobs/SkeletonLoader'
import JobCard from '@/components/jobs/JobCard'
import EmptyState from '@/components/ui/EmptyState'

export default function JobsPage() {
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch('https://remotive.com/api/remote-jobs')
  const jobs = useSelector(state => state.jobs.jobs)

  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({ jobType: '', category: '' })

  useEffect(() => {
    if (data?.jobs) {
      dispatch(setJobArr(data.jobs))
      dispatch(setLoading(false))
      dispatch(setErrorMsg(null))
    }
  }, [data, dispatch])

  useEffect(() => {
    dispatch(setLoading(loading))

    if (error) {
      dispatch(setErrorMsg(error))
    }
  }, [loading, error, dispatch])

  const filteredJobs = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return jobs.filter(job => {
      const matchesSearch =
        !normalizedQuery ||
        job.title?.toLowerCase().includes(normalizedQuery) ||
        job.company_name?.toLowerCase().includes(normalizedQuery) ||
        job.candidate_required_location?.toLowerCase().includes(normalizedQuery)

      const matchesType =
        !filters.jobType || job.job_type?.toLowerCase() === filters.jobType.toLowerCase()

      const matchesCategory =
        !filters.category || job.category?.toLowerCase() === filters.category.toLowerCase()

      return matchesSearch && matchesType && matchesCategory
    })
  }, [jobs, searchQuery, filters])

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const handleFilter = (value) => {
    if (typeof value === 'object' && value !== null) {
      setFilters(value)
      return
    }
    setFilters({ jobType: '', category: '' })
  }

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Remote Jobs</h1>
        <p className="text-gray-600">Search and filter remote opportunities from across the globe.</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <JobSearch onSearch={handleSearch} />
        <JobFilters onFilter={handleFilter} />
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : error ? (
        <EmptyState icon="⚠️" message={`Unable to load jobs: ${error}`} />
      ) : filteredJobs.length === 0 ? (
        <EmptyState icon="🔎" message="No jobs matched your search and filter criteria." />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  )
}
