const Navbar = ()=>{
    return(
        <div className="navbar flex justify-between items-center py-2 px-2 ">
           <div>
          <img src="/assets/navbar.png" className="" width={100}  alt="logo"/>
           </div>
           <div>
            <img src="/assets/user.png" width={25} alt="user"/>
           </div>
        </div>
    )
}
export default Navbar;
