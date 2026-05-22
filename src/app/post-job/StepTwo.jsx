"use client"

import React from 'react'

export default function StepTwo({ formData, dispatch }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-500">
      <h2 className="text-xl font-semibold mb-4">Company details</h2>

      <div className="grid gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Company name</span>
          <input
            value={formData.companyName}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'companyName', value: e.target.value })}
            className="mt-1 px-3 py-2 border rounded-lg"
            placeholder="ACME Inc"
          />
        </label>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium">Website</span>
            <input
              value={formData.website}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'website', value: e.target.value })}
              className="mt-1 px-3 py-2 border rounded-lg"
              placeholder="https://example.com"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Company size</span>
            <input
              value={formData.companySize}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'companySize', value: e.target.value })}
              className="mt-1 px-3 py-2 border rounded-lg"
              placeholder="e.g. 50-200"
            />
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Location</span>
          <input
            value={formData.location}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'location', value: e.target.value })}
            className="mt-1 px-3 py-2 border rounded-lg"
            placeholder="Remote / United States"
          />
        </label>
      </div>
    </section>
  )
}
