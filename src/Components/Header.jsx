import React from 'react'
import Addtask from './Addtask'
function Header(props) {
  
  return (
    <div className=' w-full pb-5 border-b-2 border-slate-200  flex justify-between'>
      <span className='text-2xl'>Dashboard </span>
      <button className='text-md hover:shadow-sm bg-blue-200 py-1 px-3 rounded-full active:scale-98' onClick={()=>{
        props.onaddtask()
      }}>Add Task</button>
    </div>
  )
}

export default Header
