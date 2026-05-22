"use client"

import React from 'react'

export default function StepOne({ formData, dispatch }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-500">
      <h2 className="text-xl font-semibold mb-4">Job details</h2>

      <div className="grid gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Job title</span>
          <input
            value={formData.title}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'title', value: e.target.value })}
            className="mt-1 px-3 py-2 border rounded-lg"
            placeholder="Senior frontend engineer"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Short description</span>
          <textarea
            value={formData.description}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'description', value: e.target.value })}
            className="mt-1 px-3 py-2 border rounded-lg"
            rows={4}
            placeholder="Brief summary of the role"
          />
        </label>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium">Job type</span>
            <select
              value={formData.jobType}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'jobType', value: e.target.value })}
              className="mt-1 px-3 py-2 border rounded-lg"
            >
              <option value="">Select type</option>
              <option value="full_time">Full time</option>
              <option value="part_time">Part time</option>
              <option value="contract">Contract</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Salary (optional)</span>
            <input
              value={formData.salary}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'salary', value: e.target.value })}
              className="mt-1 px-3 py-2 border rounded-lg"
              placeholder="e.g. $80k - $120k"
            />
          </label>
        </div>
      </div>
    </section>
  )
}
