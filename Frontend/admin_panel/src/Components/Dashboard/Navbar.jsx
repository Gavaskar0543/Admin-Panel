import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = ()=>{
    return(
        <div className="navbar flex justify-between items-center py-3 px-2 ">
           <div>
          <img src="/assets/navbar.png" className="cursor-pointer" width={140}  alt="logo"/>
           </div>
           <div>
            <FaRegCircleUser className="text-white text-xl"/>
           </div>
        </div>
    )
}
export default Navbar;
