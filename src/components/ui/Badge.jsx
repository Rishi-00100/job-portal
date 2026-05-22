import React from 'react'

export default function Badge({ text, color }) {

  const colorMap = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
  }

  return (
    <>
    <span className={`${colorMap[color]} px-3 py-1 rounded-full text-sm`}>
      {text}
    </span>
    </>
  )
}
