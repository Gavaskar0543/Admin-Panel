import { Link } from "react-router-dom"
const AdminLogin =() =>{
    return(
    
     <div className="auth-container ">
        <div className="bg-white border auth-form rounded-lg">
            <form>
                <div className="w-full flex flex-col mt-4 justify-center items-center ">
                <div className="mt-3 mb-4 flex flex-col mb-3">
                    <div className="w-full flex justify-center items-center">
                    <img src="/assets/homeImg.png" width={130} alt="logo" />
                    </div>
                    <div>
                    <p className="text-sm font-semibold text-slate-600">Welcome to Digitalflake admin</p>
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <label for="email " className="text-md font-thin text-slate-600">Email-id</label><br/>
                        <input type="email" id="email" className="w-64 px-2 py-2  border border-slate-300 focus:outline-none rounded-lg"/>
                        </div>
                    <div className="mb-3">
                        <label for="password" className=" text-md font-thin text-slate-600">Password</label><br/>
                        <input type="password" id="password" className="w-64 px-2 border border-slate-300 focus:outline-none py-2 rounded-lg"/>

                    </div>
                    <div>
                    <Link to="/admin/forgot-password">    <p className="text-sm forgot-password text-end font-semibold">Forgot Password?</p></Link>
                    </div>

                </div>
                <div>
                    <button className="addColor text-white px-2 w-64 rounded-lg py-2 font-semibold text-md">Login</button>
                </div>
                </div>
                </form>
        </div>
        </div>

    )
}

export default AdminLogin