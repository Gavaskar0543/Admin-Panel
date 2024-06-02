const SideBar = ()=>{
    const navigationItems = [{
        name:'Home',
        icon:'/assets/home.png'
    },{
        name:'Roles',
        icon:'/assets/role.png'
    },{
        name:'User',
        icon:'/assets/user.png'
    }]
return(
    <div className="side-bar">
       <div className="give-margin-20">
        <ul className="flex flex-col  jsutify-center items-center">
           { navigationItems.map((items,index) =>(
                <li key={index} className="flex w-full justify-between px-3 items-center mb-4 nav-list py-3">
                   <div className="flex ml-3 items-center">
                    <img src={items.icon} width={25} alt="icon"/>
                    <p className="px-3 font-semibold">{items.name}</p>
                    </div>
                    <p>X</p>
                </li>
            ))}
        </ul>

       </div>
    </div>
)
}

export default SideBar; 