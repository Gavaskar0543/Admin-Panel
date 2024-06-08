import {Link ,Outlet} from 'react-router-dom'
import Table from "./Table"

 
const Roles = ()=>{
 

    const data = [
        { col1: '123', col2: 'admin',col3:'active', },
        { col1: '113', col2: 'emp',col3:'active', },
        { col1: '103', col2: 'admin',col3:'active', },
       
      ];
      
      // Define columns
      const columns = [
        {
          Header: 'id',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Role Name',
          accessor: 'col2',
        },
        {
            Header:'Status',
            accessor:'col3'
        }
      ];
  
    return(
        <>
        <div><Outlet /></div><div className="main-container px-2  border rounded-lg flex flex-col  items-start">
            <div className="w-full flex justify-between items-center mt-3">
                <div className="flex">
                    <div className="flex items-center">
                        <img src="/assets/role.png" width={25} alt="role" />
                        <p className="font-semibold px-2 rounded-lg">Roles</p>
                    </div>
                    <div className="ml-3">
                        <input type="text" className="search-box px-4" placeholder="" />
                    </div>
                </div>
                <div>
                    <Link to="/roles/add"> <button className="rounded-lg px-4  text-sm py-2 font-semibold text-white addColor">Add New</button>
                    </Link>   </div>
            </div>
            <Table columns={columns} data={data}    // Define columns
    />

        </div></>
    )
    }
export default Roles