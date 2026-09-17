import React from 'react'
import { House } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';
import Login from '../Pages/Login';
import TasksPage from '../Pages/TasksPage';
function Sidebar(props) {
  return (
    <div className='p-6 h-screen w-1/6 min-w-38 bg-slate-100 flex flex-col justify-between'>
      <div>
      <div className='mb-8 font-semibold flex gap-3 items-center'>
        <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center'>
          EMS
        </div>
        <div>
        EMS
        </div>
      </div>
      <div className='flex flex-col gap-4'>
      <button className='flex items-center gap-1.5 p-2  text-slate-600 w-full rounded-xl hover:bg-slate-300'
      onClick={()=>{
        props.navito('Dashboard');
      }}>
        {console.log(props.user)
        }
      <House size={18} className=' text-slate-500 shrink-0'/>  Dashboard</button>
      {props.user==='admin' &&(
        <>
      <button className='flex items-center gap-1.5 p-2  text-slate-600 w-full rounded-xl hover:bg-slate-300'
      onClick={()=>{
        props.navito('tasks')
        
      }}
      
      > <NotepadText size={18} className=' text-slate-500 shrink-0'/> Tasks</button>
      <button className='flex items-center gap-1.5 p-2  text-slate-600 w-full rounded-xl hover:bg-slate-300' 
      onClick={()=>{
        props.navito('employees')
      }}
      > <UsersRound size={18} className=' text-slate-500 shrink-0'/> Employees</button>
      </>
      )}
      <button className='flex items-center gap-1.5 p-2  text-slate-600 w-full rounded-xl hover:bg-slate-300' 
      onClick={()=>{
        props.navito('setting');
      }}
      > <Settings size={18} className=' text-slate-500 shrink-0' /> Settings</button>
      </div>
      </div>
      <div className='flex items-end text-red-700'>
        <button className='flex gap-1 hover:scale-105' onClick={()=>{
          {props.handlelogout()}
        }}>
        <LogOut color="#ca4444" />Logout
      </button>
      </div>
    </div>
  )
}

export default Sidebar
