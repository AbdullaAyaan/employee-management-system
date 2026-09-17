import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import React, { useContext, useState } from 'react'
import TaskpageCard from '../Components/TaskpageCard'
import { AuthContext } from '../Context/AuthProvider'

function TasksPage(props) {
  const[selectedval,setselectedval]=useState("Not Chosen");
  const [userdata,setuserdata]=useContext(AuthContext)
  const handlechange=(e)=>{
    setselectedval(e.target.value);
    
  }
    return (
    <div className='h-full w-full flex'>
      <Sidebar navito={props.navito} handlelogout={props.handlelogout} user={'admin'}/>
      <div className='flex flex-col p-6 w-5/6'>
      <div className=' w-full pb-5 border-b-2 border-slate-200 justify-between'>
      <span className='w-full text-3xl flex items-center'>Task Manegement Hub</span>
    </div>
      <span className='w-full text-xl mt-3 font-normal'>View and track assignments by employee</span>
      <div className='w-full h-full mt-5 '>
        <label htmlFor="emp">Select Employee:
        <select value={selectedval} onChange={handlechange} name="emp" id="emp" className='ml-2'>
          <option disabled value="Not Chosen">Not Chosen</option>
          {
            userdata[0].map((ele,idx)=>{
              return (
                <option key={idx} value={ele.name}>{ele.name}</option>
              )
            })
}
        </select>
        </label>
        <div className='flex flex-wrap gap-6 h-130  overflow-y-auto'>
          {
            userdata[0].map((ele)=>{
              if(ele.name.trim().toLowerCase()===selectedval.trim().toLowerCase()){
               return (
               ele.tasks.map((task,idx)=>{
              return <TaskpageCard key={idx} task={task}/>
               })
               )
              }
            })
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default TasksPage
