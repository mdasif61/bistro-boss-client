import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Layout/pages/Home/Home/Home'
import { HelmetProvider } from 'react-helmet-async';
import OurMenu from './Layout/pages/OurMenu/OurMenu'
import Order from './Layout/pages/Order/Order'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/ourmenu',
        element:<OurMenu></OurMenu>
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
    </div>
  </React.StrictMode>,
)
