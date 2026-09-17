import React from 'react'

function CardsDetsAcp(props) {
  
  return (
    <div className='h-80 w-70 bg-slate-100 mt-15 rounded-2xl p-4 overflow-y-auto shrink-0 border-2  border-slate-300 shadow-sm transition-all hover:shadow-md flex flex-col justify-between'>
            <div>
            <div className='w-full flex justify-between'>
            <span className='font-semibold'>{props.emp.category}</span>
            <span className='font-medium'>{props.emp.taskDate}</span>
            </div>
            <div className='mt-4'>
              <span className='w-full flex justify-center text-xl font-medium'>{props.emp.taskTitle}</span>
              <p className='mt-2 text-md text-slate-700'>{props.emp.taskDescription}</p>
            </div>
            </div>
            <div className='flex justify-between mt-3'>
            <button className='bg-green-400 rounded-2xl py-1 w-25 flex items-center justify-center transition-colors hover:bg-green-600 hover:scale-98 active:scale-101 cursor-pointer' onClick={()=>{
              props.updatetaskstatus(props.emp.taskTitle,{completed:true,active:false})
              // props.updatetaskstatus(props.emp.taskTitle,'active',false)
            }}>Completed</button>
            <button className='bg-red-400 rounded-2xl py-1 w-20 flex items-center justify-center transition-colors hover:bg-red-600 hover:scale-98 active:scale-101 cursor-pointer' onClick={()=>{
              props.updatetaskstatus(props.emp.taskTitle,{failed:true,active:false})
              // props.updatetaskstatus(props.emp.taskTitle,'active',false)
            }}>Failed</button>
            </div>
          </div>
  )
}

export default CardsDetsAcp
