"use client"

import React, { useReducer, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setJobArr } from '@/store/slices/jobsSlice'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export default function PostJob() {
  const router = useRouter()
  const reduxDispatch = useDispatch()
  const existingJobs = useSelector((s) => s.jobs.jobs)

  const initialState = {
    // Step 1
    title: '',
    description: '',
    jobType: '',
    salary: '',
    // Step 2
    companyName: '',
    website: '',
    companySize: '',
    location: '',
    // Step 3
    skills: '', // comma-separated on the form, converted on submit
    education: '',
    deadline: '',
    applyLink: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return { ...state, [action.field]: action.value }
      case 'RESET':
        return initialState
      default:
        return state
    }
  }

  const [formData, dispatch] = useReducer(reducer, initialState)
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')

  const goNext = () => setStep((s) => Math.min(3, s + 1))
  const goBack = () => setStep((s) => Math.max(1, s - 1))

  const handleSubmit = async () => {
    setSubmitting(true)

    try {
      const newJob = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        job_type: formData.jobType,
        salary: formData.salary,
        company_name: formData.companyName,
        url: formData.applyLink || formData.website,
        candidate_required_location: formData.location,
        category: '',
        tags: formData.skills ? formData.skills.split(',').map((t) => t.trim()).filter(Boolean) : [],
        publication_date: new Date().toISOString(),
      }

      const updated = [newJob, ...(existingJobs || [])]
      reduxDispatch(setJobArr(updated))

      setSuccess('Job posted successfully! Redirecting...')
      dispatch({ type: 'RESET' })

      setTimeout(() => {
        router.push('/jobs')
      }, 1200)
    } catch (err) {
      console.error(err)
      setSuccess('Failed to post job')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>

      <div className="mb-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-blue-600"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">Step {step} of 3</div>
      </div>

      <div className="space-y-6">
        {step === 1 && <StepOne formData={formData} dispatch={dispatch} />}
        {step === 2 && <StepTwo formData={formData} dispatch={dispatch} />}
        {step === 3 && <StepThree formData={formData} dispatch={dispatch} />}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {step > 1 && (
          <button
            onClick={goBack}
            className="px-4 py-2 rounded-lg border border-gray-300"
          >
            Back
          </button>
        )}

        {step < 3 && (
          <button
            onClick={goNext}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
          >
            Next
          </button>
        )}

        {step === 3 && (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-4 py-2 rounded-lg bg-green-600 text-white disabled:opacity-60"
          >
            {submitting ? 'Posting...' : 'Submit Job'}
          </button>
        )}

        <div className="ml-auto text-sm text-gray-600">{success}</div>
      </div>
    </main>
  )
}
