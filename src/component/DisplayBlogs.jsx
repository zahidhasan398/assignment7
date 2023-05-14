import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const DisplayBlogs = ({blog,handleBookMark,handleRead}) => {
    
  return (
    <div>
        <div className="card w-full bg-base-100 shadow-xl border-2 border-blue-400 p-5 m-5">
  <figure><img src={blog.blogImage} alt="Shoes" className='w-1/2' /></figure>
  <div className="card-body">
    <div className='flex justify-between'>
        <div className='flex justify-between items-center'>
            <div><img src={blog.authorImage} alt="" className='w-[75px] h-[75px]  rounded-full'/></div>
            <div className='ml-2'>
                <h3 className='text-xl font-semibold'>{blog.authorName}</h3>
                <h3>{blog.publishDate}</h3>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <div>{blog.readTime} min read</div>
            <div><button onClick={()=>handleBookMark(blog)}><FontAwesomeIcon icon={faBookmark} /></button></div>
        </div>
    </div>
    <div>
        <h1 className='text-2xl font-bold'>{blog.blogTitle}</h1>
        <button onClick={()=>handleRead(blog)} className='underline text-blue-500'>Mark as read</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DisplayBlogs;