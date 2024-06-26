import Table from "./Table"
import { Link, Outlet } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";

const User = ()=>{
  const data = [
    { col1: '123', col2:'Ajay',col3:'9360764252',col4: 'admin',col5:'active', },
   
   
  ];
  
  // Define columns
  const columns = [
    {
      Header: 'id',
      accessor: 'col1', // accessor is the "key" in the data
    },{
      Header:'Name',
      accessor:'col2'
    },
    {
      Header:'Phone Number',
      accessor:'col3'
    },
    {
      Header: 'Role Name',
      accessor: 'col4',
    },
    {
        Header:'Status',
        accessor:'col5'
    }
  ];
    return(
    <>  {<Outlet/>}
        <div className="main-container px-2  border rounded-lg flex flex-col  items-start">
        <div className="w-full flex justify-between items-center mt-3">
            <div className="flex">
              <div className="flex items-center">
                <img src="/assets/user.png" width={25} alt="role"/>
                <p className="font-semibold px-2 rounded-lg">User</p>
                </div>
                <div className="ml-3">
                <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <IoIosSearch/>
  </span>
  <input class="search-box placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm" placeholder="" type="text" name="search"/>
</label>
                </div>
            </div>
            <div>
             <Link to="/user/add">  <button className="rounded-lg px-4  text-sm py-2 font-semibold text-white addColor">Add New</button>
         </Link>   
         </div>
        </div>
        <Table columns={columns} data={data}/>
        </div></>
    )
    }
export default User