import { Link } from "react-router-dom";

const SideBar = () => {
  const navigationItems = [
    { name: 'Home', icon: '/assets/home.png', path: '/' },
    { name: 'Roles', icon: '/assets/role.png', path: '/roles' },
    { name: 'User', icon: '/assets/user.png', path: '/user' },
  ];

  return (
    <div className="side-bar">
      <div className="give-margin-20">
        <ul className="flex flex-col justify-center items-center">
          {navigationItems.map((item, index) => (
            <Link key={index} to={item.path} className="flex w-full justify-between px-3 items-center mb-4 nav-list py-3">
              <div className="flex ml-3 items-center">
                <img src={item.icon} width={25} alt="icon" />
                <p className="px-3 font-semibold">{item.name}</p>
              </div>
              <p>X</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
