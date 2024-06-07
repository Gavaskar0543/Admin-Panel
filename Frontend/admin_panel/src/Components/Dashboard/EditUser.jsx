import { GoArrowLeft } from "react-icons/go";

const EditUser = ()=>{
    return(
        <div className="main-container">
            <div className="flex items-center py-4 ml-3">
            <div className="">
                <GoArrowLeft className="text-lg font-normal" />
            </div>
            <div>
                <p className=" font-semibold px-4">Edit User</p>
            </div>
        </div>
        <div className="ml-4 px-4 w-64">
        
       <label for="role-name" className=" ">Role Name</label>
       <input id="role-name" type="text" className="w-64 focus:outline-none" />

            </div>
            <div  className="flex confirm-btn  w-1/3 items-center justify-around">
              <div>  <button className="px-4 py-2 text-sm cancelColor w-32 rounded-2xl border font-semibold ">cancel</button>
              </div><div> <button className="text-white text-sm px-4 w-32 py-2 rounded-2xl font-semibold addColor">save</button>
              </div> </div>
            </div>
        
    )
}

export default EditUser;