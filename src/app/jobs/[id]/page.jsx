"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { saveJob, unsaveJob } from '@/store/slices/savedJobsSlice'

export default function JobDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const job = useSelector(state =>
    state.jobs.jobs.find((item) => String(item.id) === String(id))
  )

  const savedJobs = useSelector(state => state.savedJobs.savedJobs)
  const isSaved = Boolean(job && savedJobs.some((item) => item.id === job.id))

  const handleSaveToggle = () => {
    if (!job) return

    if (isSaved) {
      dispatch(unsaveJob(job.id))
    } else {
      dispatch(saveJob(job))
    }
  }

  if (!job) {
    return (
      <main className="px-4 py-14 max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/jobs" className="text-blue-600 hover:underline">
            ← Back to jobs
          </Link>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-2xl font-semibold">Job not found</h1>
          <p className="mt-3 text-gray-600">The requested job is not available in the current listings.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="px-4 py-14 max-w-6xl mx-auto">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/jobs" className="text-blue-600 hover:underline">
          ← Back to jobs
        </Link>
        <Button
          label={isSaved ? 'Remove from saved' : 'Save job'}
          variant={isSaved ? 'secondary' : 'primary'}
          onClick={handleSaveToggle}
        />
      </div>

      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="h-14 w-14 rounded-3xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">
                {job.company_name?.[0] || 'J'}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-blue-600">{job.company_name}</p>
                <h1 className="text-3xl font-semibold">{job.title}</h1>
                <p className="text-gray-600">{job.candidate_required_location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge text={job.job_type || 'Unknown'} color="blue" />
              {job.salary && <Badge text={job.salary} color="green" />}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-end">
            {job.tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} text={tag} color="purple" />
            ))}
          </div>
        </div>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <div dangerouslySetInnerHTML={{ __html: job.description || '<p>No description available.</p>' }} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-3">Details</h3>
              <dl className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium">Company</dt>
                  <dd>{job.company_name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium">Location</dt>
                  <dd>{job.candidate_required_location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium">Job type</dt>
                  <dd>{job.job_type}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium">Published</dt>
                  <dd>{job.publication_date ? new Date(job.publication_date).toLocaleDateString() : 'Unknown'}</dd>
                </div>
              </dl>
            </div>

            {job.tags?.length > 0 && (
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} text={tag} color="purple" />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold mb-4">Apply now</h3>
            <p className="text-gray-600 mb-6">Use the official application link to apply directly on the company website.</p>
            <Button
              label="Apply Now"
              variant="primary"
              onClick={() => window.open(job.url, '_blank')}
            />
          </aside>
        </div>
      </section>
    </main>
  )
}
