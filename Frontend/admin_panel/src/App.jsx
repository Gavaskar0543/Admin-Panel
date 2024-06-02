import { useState } from 'react'
import HomePage from './Pages/HomePage';
import Home from './Components/Dashboard/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<HomePage/>,
    
  }])
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
