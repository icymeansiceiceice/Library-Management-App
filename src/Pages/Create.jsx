import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch';
import { useNavigate } from 'react-router-dom';
import useTheme from '../hooks/UseTheme';

export default function Create() { 
  let {isDark} = useTheme();
  let [title,setTitle] = useState('');
  let [description,setDescription] = useState('');
  let [newCategory,setNewCategory] = useState('');
  let [categories,setCategories] = useState([]);
  let addCategory = (e)=>{
    if(newCategory && categories.includes(newCategory)){
      setNewCategory('');
      return
    }
    setCategories(preState => [newCategory,...preState]);
    setNewCategory('');
  }
  let navigator = useNavigate();
  let {setPostData,data} = useFetch('http://localhost:3000/books',"POST");

  let addBook = (e)=>{
    e.preventDefault();
    let book = {
      title,
      description,
      categories
    }
    setPostData(book);
  }

  useEffect(()=>{
    if(data){
      navigator('/')
    }
  },[data])
   
  return (
    <div className='h-screen '>
      <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`} htmlFor="grid-password">
                Book Title
            </label>
            <input value={title} onChange={e => setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Title" />
        </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Book Description
            </label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Book Description" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Categories
            </label>
            <div className="flex items-center space-x-2">
                <input value={newCategory} onChange={e => setNewCategory(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Category" />
                <button type='button' onClick={addCategory} className="bg-primary p-1 rounded-lg mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 p-1 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div className="flex flex-wrap">
                     {categories.map((g)=>(
                        <span className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-primary" key={g}>{g}</span>
                     ))
                     }
                  </div>
    </div>
    {/* create book */}
    <button className='text-white bg-primary px-3 py-2 rounded-2xl flex justify-center items-center gap-1 w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <span className="hidden md:block">Create book</span>
    </button>
    </form>
    </div>
  )
}
