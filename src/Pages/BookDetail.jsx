import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/UseFetch';
import bookpic from '../assets/the-rest-is-history-hardback-book-jacket.jpg'

export default function BookDetail() {
  let {id}= useParams();
  let {data:book,loading,error} = useFetch(`http://localhost:3000/books/${id}`);
  
  return (
    <>
    {error && <p>{error}</p>}
    {loading && <p>loading....</p>}
    {book && (
      <div className='grid grid-cols-2'>
        <div>
          <img src={bookpic} alt='Pic' className='w-[60%]'/>
        </div>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>{book.title}</h1>
          <div className='pt-3 space-x-3'>
           {book.categories.map((g)=>(
              <span className='bg-blue-500 text-white rounded-full text-sm px-2 py-2 ' key={g}>{g}</span>
           ))  }
          </div>
          <p className=''>
            {book.description}
          </p>
        </div>
      </div>
    )}
    </>
  )
}
