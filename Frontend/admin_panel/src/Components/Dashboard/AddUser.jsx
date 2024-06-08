import { GoArrowLeft } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";

const AddUser = ()=>{
    return(
        <div className="main-container">
            <div className="flex items-center py-4 ml-3">
            <div className="">
                <GoArrowLeft className="text-lg font-normal" />
            </div>
            <div>
                <p className=" font-semibold px-4">Add User </p>
            </div>
        </div>
        <div className="ml-4 px-4  ">
            {/*user details */}
        <div className="flex w-full border justify-between items-cetner">
        <div>
       <label for="user-name" className=" ">Name</label>
       <input id="user-name" type="text" className="w-64 focus:outline-none" />
       </div>
       <div>
       <label for="phone-number" className=" ">Phone Number</label>
       <input id="phone-number" type="text" className="w-64 focus:outline-none" />
       </div>
       <div>
       <label for="email-id" className=" ">Email-id</label>
       <input id="emial-id" type="email" className="w-64 focus:outline-none" />
       </div>
       </div>
       {/* role and images */}
       <div className="mt-3 w-full flex justify-between items-center">
      {/*role */}
      <div>
        <label for="role" className="">Role</label><br/>
        <select id="role" className="w-64 focus:outline-none">
            <option value="admin">Admin</option>
            <option value="superadmin">superadmin</option>
            <option value="caller">caller</option>
            <option value="Account">Account</option>
        </select>
      </div>
      {/*image upload */}
      <div className="w-full  px-4"  >
        <p>Upload image</p>
       <div className="flex w-full justify-around py-3  items-center  border">

      
        <div>
            <img src="/assets/imgupload.png" width={50} alt="userImg"/>
        </div>
        <div>
        <div class="file-input-container">
        <input type="file" id="file-input" class="file-input" />
        <label for="file-input" class="">
            <div class=" flex flex-col justify-center items-center">
 <TbPhotoUp className="text-3xl text-center"/> 
 <p className="text-sm font-bold upload-text">Upload Maximum allowed file size is 10MB</p>
                
            </div>
           
        </label>
    </div>
        </div>
        </div>
        </div>
      {/*status */}
      <div>
      <label for="status" className=" ">status</label><br/>
        <select id="status" className="w-64 focus:outline-none">
            <option value="active">active</option>
            <option value="intactive">inactive</option>
           
        </select>
      </div>
        </div>
            </div>
            <div  className="flex confirm-btn  w-1/3 items-center justify-around">
              <div>  <button className="px-4 py-2 text-sm cancelColor w-32 rounded-2xl border font-semibold ">cancel</button>
              </div><div> <button className="text-white text-sm px-4 w-32 py-2 rounded-2xl font-semibold addColor">save</button>
              </div> </div>
            </div>
        
    )
}

export default AddUser;