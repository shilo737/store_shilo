import React from 'react'
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <div className=' hover:flex hover:opacity-90 duration-500 flex justify-center items-end'>
    <img className='h-[926px] w-[2000px]'  src="https://previews.123rf.com/images/sasha2538/sasha25381510/sasha2538151000009/46913514-page-not-found-404-error-with-funny-green-monster.jpg" alt="" />
    
    <Link to="/" className='absolute flex justify-center align-bottom text-4xl mb-9 text-green-900 font-bold' > Click here back to Home </Link>
  </div>
  )
}

export default NotFound404