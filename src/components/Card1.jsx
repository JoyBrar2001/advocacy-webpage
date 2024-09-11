import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card1 = ({ children, className }) => {
  return (
    <div className={twMerge(
      "bg-[#f8f9fa] py-1.5 px-4 flex flex-col justify-start items-center text-center rounded-3xl border-[3px] border-black/20 shadow-lg",
      className,
    )}>
      {children}
    </div>
  )
}

export default Card1