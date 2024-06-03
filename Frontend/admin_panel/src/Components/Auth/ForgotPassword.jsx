import {Link} from 'react-router-dom'
const ForgotPassword = ()=>{

    return(
       <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>
        <div className='w-1/2 bg-white rounded-lg px-4 py-4 shadow-lg '>
            <p className='text-center text-2xl font-semibold py-4 textColor'>Did you forgot password?</p>
            <p className='text-sm text-nowrap text-center mb-3 text-gray-600 font-semibold'>Enter your email address and we'll send you a link to restored </p>
            <form>
                <div className="mb-3 flex justify-center items-center">
                    <div className='w-1/2'>
                    <label for="email" className='text-sm text-gray-600 font-semibold'>Email Address</label><br/>
                        <input id="email" type="email" className='w-full px-2 py-2 border-2 border-slate-300 rounded-lg focus:outline-none' />
                        </div>
                </div>
                <div className='mb-3 mt-2 flex flex-col  justify-center items-center'>
                    <button className="addColor px-4 py-2 w-64 text-white text-sm rounded-lg font-semibold">Request Reset link</button>
                    <Link to="/admin/login"><p className="mt-4 mb-3 text-slate-600 text-md font-semibold">Back to login</p></Link>
                </div>
            </form>
        </div>
        </div>
    )
}

export default ForgotPassword;