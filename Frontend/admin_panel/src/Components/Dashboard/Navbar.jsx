const Navbar = ()=>{
    return(
        <div className="navbar flex justify-between items-center ">
           <div>
          <img src="/assets/navbar.png" className="logo"  alt="logo"/>
           </div>
           <div>
           <img src="/assets/user.png" className="userimg" alt="user"/>
           </div>
        </div>
    )
}
export default Navbar;
