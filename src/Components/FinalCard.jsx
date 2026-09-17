import React from 'react'

function FinalCard(props) {
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
            {props.emp.completed?<div className='w-full flex items-center mt-3'>
            <span className='w-full bg-green-200 text-green-700 p-1'><p className='text-center'>Task Completed</p></span>
            </div>:
            <div className='w-full flex items-center mt-3'>
            <span className='w-full bg-red-200 text-red-700 p-1'><p className='text-center'>Task Failed</p></span>
            </div>}
          </div>
  )
}

export default FinalCard
