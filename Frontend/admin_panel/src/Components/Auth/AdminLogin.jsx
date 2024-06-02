const AdminLogin =() =>{
    return(
     <div className="auth-container">
        <div className="bg-white border auth-form">
            <form>
                <div>
                    <img src="/assets/homeImg.png" width={100} alt="logo" />
                    <p>Welcome to DigitalFlake admin</p>
                </div>
                <div>
                    <div className="mb-3">
                        <label for="email">Email-id</label><br/>
                        <input type="email" id="email" className="w-64 px-2 py-2 border border-slate-300 focus:outline-none rounded-lg"/>
                        </div>
                    <div className="mb-3">
                        <label for="password">Password</label><br/>
                        <input type="password" id="password" className="w-64 px-2 border border-slate-300 focus:outline-none py-2 rounded-lg"/>

                    </div>
                    <div>
                        <p className="text-md text-end text-semibold">Forgot Password?</p>
                    </div>

                </div>
                <div>
                    <button className="addColor text-white px-2 w-64 rounded-lg py-2 font-semibold text-md">Login</button>
                </div>
                </form>
        </div>
        </div>

    )
}

export default AdminLogin