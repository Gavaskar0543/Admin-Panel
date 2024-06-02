import { Outlet,Route,Routes } from 'react-router-dom';
import Home from '../Components/Dashboard/Home'
import Roles from '../Components/Dashboard/Roles';
import User from '../Components/Dashboard/User'
import Navbar from '../Components/Dashboard/Navbar';
import SideBar from '../Components/Dashboard/SideBar';
import AddRole from '../Components/Dashboard/AddRole';
const HomePage = () =>{
    return(
       <>
       <Navbar/>
       <div className='flex'>
       <SideBar/>
       <div className='px-2'>
       <div className=''>
          <Routes>
            <Route path="/" element={<AddRole />} />
            <Route path="/roles" element={<Roles />} />
            <Route path='/user'  element={<User/>} />
          </Routes>
          <Outlet />
        </div>
       </div>
       </div>
       </>
    )
}

export default HomePage;