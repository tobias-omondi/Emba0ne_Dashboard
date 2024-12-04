import React from 'react'

const Header = ({tittle}) => {
  return (
    <div className='bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-200 '>
        <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 '>
            <h1 className='text-2xl font-semibold text-black'>{tittle}</h1>
        </div>
    </div>
  )
}

export default Header