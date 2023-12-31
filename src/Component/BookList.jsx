import React from 'react'
import book from '../assets/the-rest-is-history-hardback-book-jacket.jpg'
import useFetch from '../hooks/UseFetch'
import { Link, useLocation, useParams } from 'react-router-dom';
import useTheme from '../hooks/UseTheme';



export default function BookList() {
  
  let {isDark} = useTheme();
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let search = param.get('search');

  let {data:books,loading,error} = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ''}`);
  if(error){
    return <p>{error}</p>
  }


  return (
    <div>
      {loading && <p>loading.....</p>}
      {!!books &&(
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">  
          {
            books.map((data)=> (
              <Link to={`/books/${data.id}`} key={data.id} >
              <div className={`p-4 border border-1 min-h-[550px] ${isDark? 'bg-dbg border-primary text-white' : ''}`} >
                <img src={book} alt=""/>
                <div className="text-center space-y-2 mt-3">
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <div className="flex flex-wrap">
                     {data.categories.map((g)=>(
                        <span className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500" key={g}>{g}</span>
                     ))
                     }
                  </div>
                </div>
              </div>
            </Link>         
            ))
          }
      </div>  
        )}
        {
          books && !books.length && <p className='text-center text-xl text-gray-500'>No Search Result Found!!!</p>
        }
      </div>
  )
}
