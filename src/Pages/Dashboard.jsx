import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Cards from '../Components/Cards'
import Table from '../Components/Table'
import { AuthContext } from '../Context/AuthProvider'
import Addtask from '../Components/Addtask'
function Dashboard(props) {
  const [userdata,setuserdata]=useContext(AuthContext);
  console.log(userdata);
  
  let empdata=[];
  let total=0;
  let completed=0;
  let failed=0;
  let newtask=0;
  let active=0;
  userdata[0].map((ele)=>{
  // ele.name;
   total=0;
   completed=0;
   failed=0;
   active=0;
   newtask=0;
        ele.tasks.map((elem)=>{
          if(elem.newTask){
            newtask++;}
          if(elem.completed){
            completed++;
          }
          if(elem.failed){
            failed++;
          }
          if(elem.active){
            active++;
          }
          total++;
        })
          const objt={
            "name":ele.name,
            "total":total,
            "active":active,
            "completed":completed,
            "failed":failed,
            "newtask":newtask
          }
          empdata.push(objt)        
    
      })
      total=0;
      completed=0;
      failed=0;
      newtask=0;
      active=0;
   empdata.map((ele)=>{
    total+=ele.total
    completed+=ele.completed
    failed+=ele.failed
    active+=ele.active
    newtask+=ele.newtask
   })
   return (
     <div className='flex'>
      <Sidebar handlelogout={props.handlelogout} navito={props.navito} user={'admin'}/>
      <div className='w-full py-4 px-6'>
      <Header onaddtask={props.onaddtask}/>
      <div className='mt-4 mb-7 flex flex-col gap-1'>
        <span className='text-4xl'>Welcome back, Admin</span>
        <span className='text-slate-400'>Welcome to your, Dashboard</span>
        </div>
      <div className='flex justify-between'>
      <Cards task={['Total',total]}/>
      <Cards task={['New',newtask]}/>
      <Cards task={['Active',active]}/>
      <Cards task={['Completed',completed]}/>
      <Cards task={['Failed',failed]}/>
      </div>
      <Table emp={empdata}/>    
      </div>
    </div>
  )
}

export default Dashboard
