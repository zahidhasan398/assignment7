import React from 'react'

const DisplayBooks = ({book}) => {
  return (
    <div>
        <div className='text-xl font-semibold shadow-xl m-3 p-2'>{book.blogTitle}</div>
    </div>
  )
}

export default DisplayBooks