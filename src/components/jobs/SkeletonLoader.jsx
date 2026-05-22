import React from 'react'

export default function SkeletonLoader() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm animate-pulse dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-5 h-14 w-14 rounded-3xl bg-slate-200 dark:bg-slate-700" />
          <div className="mb-4 h-5 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="mb-3 h-4 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="mb-6 h-3 w-1/3 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="flex gap-3">
            <div className="h-8 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-8 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      ))}
    </div>
  )
}
