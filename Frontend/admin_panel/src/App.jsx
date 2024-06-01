import { useState } from 'react'
import HomePage from './Pages/HomePage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<HomePage/>
  }])
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
