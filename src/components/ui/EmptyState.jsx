import React from 'react'

export default function EmptyState({ message, icon }) {

  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="text-6xl text-gray-400">
        {icon}
      </div>
      <div className="text-gray-500 text-lg text-center">
        {message}
      </div>
    </div>
  )
}
