import React from 'react'
import { ClipboardCheck,Plus,Check,TriangleAlert,CalendarCheck2 } from 'lucide-react';


function Cards(props) {
  const cardconfig={
  Total:{
    icon:<ClipboardCheck color="#342d6c" size={22}  className='bg-white p-px w-8 h-8 rounded-xl flex items-center justify-center'/>,
  },
  New:{
    icon:<Plus color="#1665e3" className='bg-white p-px w-8 h-8 rounded-xl flex items-center justify-center' />,
  },
  Active:{
    icon:<CalendarCheck2 color="#ffdd00" className='bg-white p-px w-8 h-8 rounded-xl flex items-center justify-center' />
  }
  ,
  Completed:{
    icon:<Check color="#17b036" className='bg-white p-px w-8 h-8 rounded-xl flex items-center justify-center'/>,
  },
  Failed:{
    icon:<TriangleAlert color="#cd893c" className='bg-white p-px w-8 h-8 rounded-xl flex items-center justify-center'/>
  }   
}

let curtask=cardconfig[props.task[0]]

return (
    <div className='flex flex-col bg-sky-50 w-44 min-w-55 p-3 rounded-[10px] h-28 gap-3 border-2 border-slate-300 shadow-sm transition-all hover:shadow-md'>
      <span className='text-xl flex items-center gap-2'>{curtask.icon}{props.task[0]}  Tasks</span>
      <span className='text-3xl font-bold pl-1 text-slate-800'>{props.task[1]}</span>
    </div>
  )
}

export default Cards
