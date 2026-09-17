import React from 'react'

function TaskpageCard(props) {
  console.log(props.task);
  let tag,clr;
  if(props.task.active){tag='Active'; clr='text-yellow-500 text-lg'}
  else if(props.task.completed){tag='Completed'; clr='text-green-500 text-lg'}
  else if(props.task.failed){tag='Failed'; clr='text-red-500 text-lg'}
  else if(props.task.newTask){tag='Newtask'; clr='text-blue-500 text-lg'}
  return (
    <div className='h-80 w-70 bg-slate-100 mt-15 rounded-2xl p-4 overflow-y-auto shrink-0 border-2  border-slate-300 shadow-sm transition-all hover:shadow-md flex flex-col justify-between'>
            <div>
            <div className='w-full flex justify-between'>
            <span className='font-semibold'>{props.task.category}</span>
            <span className='font-medium'>{props.task.taskDate}</span>
            </div>
            <div className='mt-4'>
              <span className='w-full flex justify-center text-xl font-medium'>{props.task.taskTitle}</span>
              <p className='mt-2 text-md text-slate-700'>{props.task.taskDescription}</p>
            </div>
            </div>
            <div className={clr}>
            {tag}
            </div>
          </div>
  )
}

export default TaskpageCard
