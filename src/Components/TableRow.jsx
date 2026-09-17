import React from 'react'

function TableRow(props) {
  
  return (
     <tr className=' border-b-2 border-slate-200 h-8 text-center'>
            <td>{props.emp.name}</td>
            <td className=''>{props.emp.newtask}</td>
            <td className=''>{props.emp.active}</td>
            <td>{props.emp.total}</td>
            <td>{props.emp.completed}</td>
            <td>{props.emp.failed}</td>
            </tr>
  )
}

export default TableRow
