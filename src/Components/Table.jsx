import React from 'react'
import TableRow from './TableRow'
function Table(props) {
  return (
    <div id='tab' className='w-full max-h-96 border-2 border-slate-300 rounded-xl mt-8 overflow-y-auto'>
      
      <table className='w-full border-collapse'>
        <thead>
            <tr className=' bg-slate-50 border-b-2 border-slate-200 h-10'>
            <th>Employee Name</th>
            <th>New Task</th>
            <th>Active Task</th>
            <th>Total Task</th>
            <th>Completed</th>
            <th>Failed</th>
            </tr>
        </thead>
        <tbody className=''>
          {console.log(props.emp)}
          
            {props.emp.map((ele,idx)=>{
            return <TableRow key={idx} emp={ele}/>
              
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
