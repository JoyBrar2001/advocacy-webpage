import React from 'react'
import { twMerge } from 'tailwind-merge'

const PageWrapper = ({ className, children }) => {
  return (
    <div className={twMerge(
      "font-googleSans w-full min-h-screen bg-gradient-to-tr from-[#fdf0e3] via-[#f6eaed] to-[#dbebf8]",
      className,
    )}>
      <div className="max-w-[1200px] mx-auto py-6">
        {children}
      </div>
    </div>
  )
}

export default PageWrapper