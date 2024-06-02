const Navbar = ()=>{
    return(
        <div className="navbar flex justify-between items-center py-3 px-2 ">
           <div>
          <img src="/assets/navbar.png" className="cursor-pointer" width={140}  alt="logo"/>
           </div>
           <div>
            <img src="/assets/user.png" className="cursor-pointer" width={25} alt="user"/>
           </div>
        </div>
    )
}
export default Navbar;
