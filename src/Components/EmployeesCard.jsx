import React from 'react'

function EmployeesCard(props) {
  return (
    <div className='h-90 w-80 bg-slate-100 mt-1 rounded-2xl p-4 overflow-y-auto shrink-0 border-2  border-slate-300 shadow-sm transition-all hover:shadow-md flex flex-col justify-between'>
            <div>
                <div className='w-full flex justify-center'>
            <div className='w-25 h-25 rounded-full overflow-hidden '>
            <img src={props.emp.photo} alt="photo" />
            </div>
            </div>
            <div className='mt-4'>
              <span className='w-full flex justify-center text-2xl text-blue-900 font-medium'>{props.emp.name}</span>
              <span className='w-full flex justify-center'>{props.emp.role}</span>
              <p className='mt-2 text-md text-slate-700'>{props.emp.about}</p>
              <p className='text-md text-blue-700 mt-2'>{props.emp.email}</p>
            </div>
            </div>
            <div>
            
            </div>
          </div>
  )
}

export default EmployeesCard
// Create a Dashboard from scratch ,use attractfull colours, use some kind of animation to level up the website creativity use simple navigation so that the user face no difficulty in finding the acticles there looking for made this dashboard by using react , tailwind"