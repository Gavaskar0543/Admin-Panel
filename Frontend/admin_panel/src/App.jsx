import { useState } from 'react'
import HomePage from './Pages/HomePage';
import Home from './Components/Dashboard/Home'
import AdminLogin from './Components/Auth/AdminLogin'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ForgotPassword from './Components/Auth/ForgotPassword';
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<HomePage/>,
    
  },{
    path:'/admin/login',
    element:<AdminLogin/>
  },{
    path:'/admin/forgot-password',
    element:<ForgotPassword/>
  }])
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
