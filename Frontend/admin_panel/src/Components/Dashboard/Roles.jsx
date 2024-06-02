import Table from "./Table"

const Roles = ()=>{
    return(
        <div className="main-container px-2  border rounded-lg flex flex-col  items-start">
        <div className="w-full flex justify-between items-center mt-3">
            <div className="flex">
              <div className="flex items-center">
                <img src="/assets/role.png" width={25} alt="role"/>
                <p className="font-semibold px-2 rounded-lg">Roles</p>
                </div>
                <div className="ml-3">
                    <input type="text" className="search-box px-4" placeholder=""/>
                </div>
            </div>
            <div>
                <button className="rounded-lg px-4  text-sm py-2 font-semibold text-white addColor">Add New</button>
            </div>
        </div>
        <Table/>
        </div>
    )
    }
export default Roles