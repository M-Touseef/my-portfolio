import React from 'react'
export default function Footer() {
    return (
      <footer className="bg-indigo-900 text-gray-100 py-4 mt-8 dark:bg-gray-800">
        <div className="text-center text-xs md:text-sm">
          Made by Muhammad Touseef – {new Date().getFullYear()}
        </div>
      </footer>
    )
  }