import { Outlet } from 'react-router-dom';
import Home from '../Components/Dashboard/Home'
import Navbar from '../Components/Dashboard/Navbar';
import SideBar from '../Components/Dashboard/SideBar';
const HomePage = () =>{
    return(
       <>
       <Navbar/>
       <div className='flex'>
       <SideBar/>
       <div className='px-3'>
        <Home/>
       </div>
       </div>
       </>
    )
}

export default HomePage;