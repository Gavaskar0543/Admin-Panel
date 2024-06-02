import { useState } from 'react'
import HomePage from './Pages/HomePage';
import Home from './Components/Dashboard/Home'
import AdminLogin from './Components/Auth/AdminLogin'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<HomePage/>,
    
  },{
    path:'/admin/login',
    element:<AdminLogin/>
  }])
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
