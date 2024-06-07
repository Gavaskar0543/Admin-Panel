import Modal from 'react-modal';
import { TbAlertTriangleFilled } from "react-icons/tb";

const Alert = ({ modalIsOpen , closeModal,text,message})=>{

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '36%',
          height: '40%',
          boxShadow:'0px 0px 6px 0px rgba(0,0,0,0.75)',
          borderRadius:'12px'
        },
      };
   return(
    <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
     <div className='flex flex-col justify-around  w-full h-full items-center'>
        <div className='flex justify-center items-center gap-2'>
         <span> <TbAlertTriangleFilled className=" text-2xl font-bold text-red-800"/></span>
           <p className='text-2xl font-bold'>{text}</p>
        </div>
        <div>
           <p className='text-xl font-semibold text-gray-500'>{message}</p>
        </div>
        <div className='flex justify-around w-full items-center'>
        <div >  <button className="px-4 py-2 text-sm cancelColor w-32 rounded-2xl border font-semibold ">cancel</button>
              </div><div> <button className="text-white text-sm px-4 w-32 py-2 rounded-2xl font-semibold addColor">confirm</button>
              </div>

        </div>
     </div>
        </Modal>

   )
}
export default Alert;