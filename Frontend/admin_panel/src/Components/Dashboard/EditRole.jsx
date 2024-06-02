import { GoArrowLeft } from "react-icons/go";

const AddRole = ()=>{
    return(
        <div className="main-container">
            <div className="flex items-center py-2">
            <div>
                <GoArrowLeft />
            </div>
            <div>
                <p className=" font-semibold px-4">Add Role</p>
            </div>
        </div><div>
                <legend>Role</legend>

            </div>
            <div  className="flex confirm-btn  w-1/3 items-center justify-around">
              <div>  <button className="px-4 py-2 text-sm cancelColor w-32 rounded-2xl border font-semibold ">cancel</button>
              </div><div> <button className="text-white text-sm px-4 w-32 py-2 rounded-2xl font-semibold addColor">save</button>
              </div> </div>
            </div>
        
    )
}

export default AddRole;