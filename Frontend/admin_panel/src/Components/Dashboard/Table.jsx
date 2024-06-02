import { useTable, useSortBy } from 'react-table';
import { TiArrowUnsorted } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const data = [
    { col1: '123', col2: 'admin',col3:'active', },
    { col1: '113', col2: 'emp',col3:'active', },
    { col1: '103', col2: 'admin',col3:'active', },
   
  ];
  
  // Define columns
  const columns = [
    {
      Header: 'id',
      accessor: 'col1', // accessor is the "key" in the data
    },
    {
      Header: 'Role Name',
      accessor: 'col2',
    },
    {
        Header:'Status',
        accessor:'col3'
    }
  ];
function Table() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
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
                    <RiDeleteBin6Line className='ml-2 cursor-pointer' />
                </td>
              </tr></>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;