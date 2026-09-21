import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Cards from '../Components/Cards'
import DetsCard from '../Components/DetsCard'
import Empheader from '../Components/Empheader'
import CardsDetsAcp from '../Components/CardsDetsAcp'
import { AuthContext } from '../Context/AuthProvider'
import FinalCard from '../Components/FinalCard'
function EmployeeDashboard(props) {
  const [userdata,setuserdata]=useContext(AuthContext)
  const emp=JSON.parse(localStorage.getItem("currentemp"));
  let total=0;
  let completed=0;
  let failed=0;
  let newtask=0;
  let active=0;
  
  emp.tasks.map((ele)=>{
    if(ele.newTask) {
      newtask++;
    }
    if(ele.completed){
      completed++;
    }
    if(ele.failed){
      failed++;
    }
    if(ele.active){
      active++;
    }
    total++;
  })
  const updatetaskstatus=(tasktitle,updates)=>{
    const updatedemployee=userdata[0].map((ele)=>{
      if(ele.id!==emp.id){return ele;}
      return{
        ...ele,
        tasks:ele.tasks.map((task)=>{
          if(task.taskTitle.trim().toLowerCase()!==tasktitle.trim().toLowerCase()){return task;}
          return{
            ...task,
            ...updates
          
          }
        })
      }
    })
    const updatedcurremp=updatedemployee.find(ele=>ele.id===emp.id);
    localStorage.setItem("employees",JSON.stringify(updatedemployee));
    localStorage.setItem("currentemp",JSON.stringify(updatedcurremp));
  setuserdata([updatedemployee,userdata[1]]);
  }

  return (
   <div className='flex'>
      <Sidebar handlelogout={props.handlelogout} user={'emp'} navito={props.navito}/>
      <div className='w-5/6 py-4 px-6'>
      <Empheader/>
      <div className='mt-4 mb-7 flex flex-col gap-1'>
        <span className='text-4xl'>Welcome back,{emp.name} </span>
        <span className='text-slate-400'>Welcome to your, Dashboard</span>
        </div>
      <div className='flex justify-between'>
      <Cards task={['Total',total]}/>
      <Cards task={['New',newtask]}/>
      <Cards task={['Active',active]}/>
      <Cards task={['Completed',completed]}/>
      <Cards task={['Failed',failed]}/>
      </div>
      <div className='w-full flex flex-row gap-10 overflow-x-auto p-2'>
         {emp.tasks.map((ele,idx)=>(
        (ele.newTask?<DetsCard key={idx} emp={ele} updatetaskstatus={updatetaskstatus} />:(ele.completed||ele.failed?<FinalCard key={idx} emp={ele} updatetaskstatus={updatetaskstatus}/>:<CardsDetsAcp key={idx} emp={ele} updatetaskstatus={updatetaskstatus}/>))
        
        ))}
        
          </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
