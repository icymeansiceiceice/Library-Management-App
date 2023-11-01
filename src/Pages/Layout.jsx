import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style.css'


export default function Layout() {
  let location = useLocation();
  return (
    <div>
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
