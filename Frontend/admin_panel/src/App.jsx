import { useState } from 'react'
import HomePage from './Pages/HomePage';
import Home from './Components/Dashboard/Home'
import AdminLogin from './Components/Auth/AdminLogin'
import {createBrowserRouter,RouterProvider,Routes,Route} from 'react-router-dom'
import ForgotPassword from './Components/Auth/ForgotPassword';
import Roles from './Components/Dashboard/Roles';
import User from './Components/Dashboard/User'
import AddRole from './Components/Dashboard/AddRole';
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<HomePage/>,
    children:[{
      path:'/',
      element:<Home/>
    },
    ,{
      path:"/roles",
      element:<Roles/>,
      children:[{
        path:"/roles/add",
        element:<AddRole/>
      }]
    },
    {
      path:"/user",
      element:<User/>
    }
  ]
    
  },{
    path:'/admin/login',
    element:<AdminLogin/>
  },{
    path:'/admin/forgot-password',
    element:<ForgotPassword/>
  }]);


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
