import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style.css'
import useTheme from '../hooks/UseTheme'


export default function Layout() {
  
   let {isDark} = useTheme();
   let body = document.body;
  let location = useLocation();
  useEffect(()=>{
    if(isDark){
      body.classList.add('bg-dbg')
    }else{
      body.classList.remove('bg-dbg')
    }
  },[isDark])
  return (
    <div className={isDark ? 'bg-dbg' : 'bg-white'}>
       <Navbar/>
       <SwitchTransition>
          <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
            <div className='max-w-6xl mx-auto p-3'>
              <Outlet/>
            </div>
          </CSSTransition>
       </SwitchTransition>
       </div>  
  )
}
