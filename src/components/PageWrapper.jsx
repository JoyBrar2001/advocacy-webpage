import React from 'react'
import { twMerge } from 'tailwind-merge'

const PageWrapper = ({ className, children }) => {
  return (
    <div className="font-googleSans w-full min-h-screen flex justify-center items-center bg-gradient-to-tr from-[#fdf0e3] via-[#f6eaed] to-[#dbebf8]">
      <div className={twMerge(
        "w-full h-full max-w-[1200px] mx-auto py-6",
        className,
      )}>
        {children}
      </div>
    </div>
  )
}

export default PageWrapper