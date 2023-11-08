import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/index.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
     <ThemeContextProvider>
           <RouterProvider router={router} />
     </ThemeContextProvider>
    
)
