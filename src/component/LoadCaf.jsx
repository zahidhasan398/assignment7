import React, { useEffect, useState } from 'react'
import DisplayBlogs from './DisplayBlogs';
import DisplayBooks from './DisplayBooks';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const LoadCaf = () => {
    const [blogs,setBlogs]=useState([]);
    const [books,setBooks]=useState([]);
    const [read,setRead]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
    const handleBookMark=(book)=>{
          let newBooks=[];
         const exists=books.find(bk=>bk.id===book.id);
         if(!exists){
            newBooks=[...books,book];
            setBooks(newBooks);
         }
         else{
            toast("its already added")
            
         }

    }
    const handleRead=(times)=>{
       let timesCart=[];
       timesCart=[...read,times];
       setRead(timesCart);

    }
  return (
    <div>
        <div><ToastContainer /></div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
        <div className='md:col-span-2'>
          { 
            blogs.map(blog=><DisplayBlogs key={blog.id} blog={blog} handleBookMark={handleBookMark} handleRead={handleRead}></DisplayBlogs>)
          }
        </div>
        <div>
            <div className='border-4 p-3 text-2xl font-semibold text-blue-600 my-3 mx-4 rounded-md'>
                spent times on read: 
                {
                    read.reduce((prev,current)=>prev+Number(current.readTime),0)
                }
                mins
            </div>
            <h1 className='text-2xl font-semibold text-center rounded-md'>Bookmarked Blogs : {books.length}</h1>
         {
            books.map(book=><DisplayBooks key={book.id} book={book}></DisplayBooks>)
         }
        </div>
    </div>
    </div>
  )
}

export default LoadCaf