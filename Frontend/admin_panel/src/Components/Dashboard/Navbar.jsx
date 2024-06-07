import { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import Alert from './Alert';
const Navbar = ()=>{
    const [modalIsOpen, setIsOpen] = useState(false);
    const isOpen = () =>{
        setIsOpen(true);
    }
    const closeModal = ()=>{
        setIsOpen(false)
    } 
    const delte ="delete"
    return(
        <>
       {isOpen ? <Alert modalIsOpen={modalIsOpen} closeModal={closeModal} text={"Logout"} message={"Are you sure you want to log out?"} /> : ''}
        <div className="navbar flex justify-between items-center py-3 px-2 ">
                <div>
                    <img src="/assets/navbar.png" className="cursor-pointer" width={140} alt="logo" />
                </div>
                <div>
                    <FaRegCircleUser className="text-white text-xl" onClick={isOpen}/>
                </div>
            </div></>
    )
}
export default Navbar;
