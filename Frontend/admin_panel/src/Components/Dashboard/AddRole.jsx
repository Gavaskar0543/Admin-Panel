import { GoArrowLeft } from "react-icons/go";

const AddRole = ()=>{
    return(
        <div className="main-container">
            <div className="flex items-center py-4 ml-3">
            <div className="">
                <GoArrowLeft className="text-lg font-normal" />
            </div>
            <div>
                <p className=" font-semibold px-4">Add Role</p>
            </div>
        </div>
        <div className="ml-4 px-4 w-64">
        
        <label class="block">
  <span class="after:content-[''] after:ml-0.5 after:text-red-500 block text-sm font-semibold ">
    Role Name
  </span>
  <input type="text" name="text" class="mt-1 px-3 py-2 bg-white border shadow-sm w-64 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
</label>

            </div>
            <div  className="flex confirm-btn  w-1/3 items-center justify-around">
              <div>  <button className="px-4 py-2 text-sm cancelColor w-32 rounded-2xl border font-semibold ">cancel</button>
              </div><div> <button className="text-white text-sm px-4 w-32 py-2 rounded-2xl font-semibold addColor">save</button>
              </div> </div>
            </div>
        
    )
}

export default AddRole;