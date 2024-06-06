const Alert = ()=>{


   return(
    <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>

    <div className='w-1/2 bg-white rounded-lg px-4 py-4 shadow-lg '>
        <div>
            <p>text</p>
        </div>
        <div>
        <p>mess</p>
        </div>
        <div>
            <div>
                <button className="px-2 py-2 font-semibold text-slate-500 w-32 text-md rounded-lg">cancle</button>
            </div>
            <div>
                <button className="px-2 py-2 font-semibold w-32 text-white text-md rounded-lg">Confirm</button>
            </div>
            </div>   
        </div>
        </div>

   )
}
export default Alert;