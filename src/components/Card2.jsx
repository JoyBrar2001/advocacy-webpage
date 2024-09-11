import React from 'react'

const Card2 = ({ heading, description, children }) => {
  return (
    <div className='flex flex-col gap-4 justify-start items-center bg-white border-2 border-black/20 shadow-xl rounded-3xl px-6 py-4'>
      <h2 className='text-xl text-[#666666] underline text-center'>
        {heading}
      </h2>

      {description && (
        <p className='text-lg text-[#666666]'>
          {description}
        </p>
      )}

      {children && (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}

export default Card2