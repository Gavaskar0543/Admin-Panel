import { useTable, useSortBy } from 'react-table';
import { useState } from 'react';
import { TiArrowUnsorted } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Alert from './Alert';

function Table({columns, data}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const isOpen = () =>{
      setIsOpen(true);
  }
  const closeModal = ()=>{
      setIsOpen(false)
  } 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);


  return (
    <>
    {isOpen ?   <Alert modalIsOpen={modalIsOpen} closeModal={closeModal} message={'Are you sure you want to delete this role?'} text={'Delete'}/>
: ''  }
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr  {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th   {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <p className='flex justify-center items-center'>  {column.render('Header')} <span className='px-1 text-gray-800'><TiArrowUnsorted className='' /> </span></p>
                    
                      
                    
                </th>
            ))}
            <th>Action</th>
          </tr>
        ))}
      </thead>
      <tbody className='' {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <>
            <tr className='border border-2' {...row.getRowProps()}>
                  {row.cells.map(cell => (
                      <td className='font-semibold text-md' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                   
                 ))}
                <td className='w-full flex justify-center items-center'>
                    <FiEdit className='cursor-pointer'/>
                    <RiDeleteBin6Line className='ml-2 cursor-pointer' onClick={ isOpen} />
                </td>
              </tr></>
          );
        })}
      </tbody>
    </table></>
  );
}
export default Table;