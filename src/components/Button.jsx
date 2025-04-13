import React from 'react'
export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="text-xs md:text-sm px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
      >
        {children}
      </button>
    )
  }