import React from 'react'

export default function Button({ label, onClick, variant }) {

  const variantMap = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  }

  return (
    <>
      <button onClick={onClick} className={`${variantMap[variant]} px-4 py-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer`}>
        {label}
      </button>
    </>
  )
}
