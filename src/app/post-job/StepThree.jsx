"use client"

import React from 'react'

export default function StepThree({ formData, dispatch }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-500">
      <h2 className="text-xl font-semibold mb-4">Requirements & application</h2>

      <div className="grid gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Skills (comma separated)</span>
          <input
            value={formData.skills}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'skills', value: e.target.value })}
            className="mt-1 px-3 py-2 border rounded-lg"
            placeholder="react, node, typescript"
          />
        </label>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium">Education</span>
            <input
              value={formData.education}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'education', value: e.target.value })}
              className="mt-1 px-3 py-2 border rounded-lg"
              placeholder="Bachelor's, Master's, etc"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Application link / email</span>
            <input
              value={formData.applyLink}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'applyLink', value: e.target.value })}
              className="mt-1 px-3 py-2 border rounded-lg"
              placeholder="https://example.com/apply or jobs@example.com"
            />
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Application deadline (optional)</span>
          <input
            type="date"
            value={formData.deadline}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'deadline', value: e.target.value })}
            className="mt-1 px-3 py-2 border rounded-lg"
          />
        </label>
      </div>
    </section>
  )
}
