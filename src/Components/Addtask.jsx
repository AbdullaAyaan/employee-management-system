import React, { useState } from 'react'
import { AuthContext } from '../Context/AuthProvider';
import { useContext } from 'react';
import { Cross, X } from 'lucide-react';
function Addtask(props) {
  
  const [userdata,setuserdata]=useContext(AuthContext);
  const [taskTitle,settaskTitle]=useState('');
  const [taskDate,settaskDate]=useState('');
  const [asign,setasign]=useState('');
  const [category,setcategory]=useState('');
  const [taskDescription,settaskDescription]=useState('');
  const handlesubmit=(e)=>{
    e.preventDefault();
    const newtask={
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active:false,
      newTask:true,
      completed:false,
      failed:false
    };
    const data=JSON.parse(localStorage.getItem('employees'))
    const admin_data=JSON.parse(localStorage.getItem('admin'))
    settaskTitle("")
    settaskDate("")
    setasign("")
    setcategory("")
    settaskDescription("")
    let userfound=false;
    data.map((ele)=>{
      if(asign.trim().toLowerCase()===ele.name.trim().toLowerCase()){
        ele.tasks.push(newtask);
        userfound=true;
      }
    })
    if(userfound){
      
    localStorage.setItem("employees",JSON.stringify(data))
    // localStorage.setItem("admin",JSON.stringify(data))
    setuserdata([data,admin_data])
    }
  }
  
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-olive-100'>
      <button className='top-1 absolute right-5 bg-red-500 rounded-full p-1 h-7 w-7 flex items-center justify-center text-white active:scale-96'
      onClick={()=>{props.onremovetask()}}><X/></button>
      <div className='h-140 w-120 bg-white rounded-2xl p-3 '>
        <form className='flex flex-col gap-2' onSubmit={(e)=>{
          handlesubmit(e);
        }}>
        <span className='w-full flex justify-center text-2xl mb-4 font-bold'>Assign Task</span>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Task Title</span>
            <input type="text" placeholder='Make a UI Design' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              settaskTitle(e.target.value);
            }} value={taskTitle}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Date</span>
            <input type="date" className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              settaskDate(e.target.value);
            }} value={taskDate}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Asign to</span>
            <input type="text" placeholder='employee name' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setasign(e.target.value);
            }} value={asign}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Category</span>
            <input type="text" placeholder='design,dev etc' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setcategory(e.target.value);
            }} value={category}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Description</span>
            <textarea name="desc" id="desc" placeholder='...' className='border border-slate-300 rounded-2xl py-1 px-3' rows={4} cols={50}
            onChange={(e)=>{
              settaskDescription(e.target.value)
            }} value={taskDescription}></textarea>
        </label>
        <div className='w-full flex justify-center mt-2'>
        <button className='bg-green-400 py-1 w-40 rounded-2xl text-md font-medium active:scale-98'>Create Task</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Addtask