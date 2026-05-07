import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <p className='text-lg font-sans'>Oops! The page you{`'`}re looking for doesn{`'`}t exist.</p>
      <h1 className='text-4xl font-bold font-sans'>404 - Page Not Found</h1>
    </div>
  )
}

export default NotFoundPage