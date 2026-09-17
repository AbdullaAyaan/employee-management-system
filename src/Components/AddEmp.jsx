import React, { useContext } from 'react'
import { useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { X } from 'lucide-react';
function AddEmp(props) {
    const [userdata,setuserdata]=useContext(AuthContext)
    const [name,setname]=useState('');
    const [id,setid]=useState('');
    const [email,setemail]=useState('');
    const [role,setrole]=useState('');
    const [pass,setpass]=useState('');
    const [photourl,setphotourl]=useState('');
    
    const clr=()=>{
        setname('');
        setemail('');
        setrole('');
        setphotourl('');
        setid('');
        setpass('');
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const newemp={
            "about":"",
            "email":email,
            "id":id,
            "name":name,
            "password":pass,
            "photo":photourl,
            "role":role,
            "tasks":[]
        };
        userdata[0].push(newemp);
        console.log(name);
        console.log(email);
        console.log(role);
        console.log(photourl);
        clr();
        localStorage.setItem("employees",JSON.stringify(userdata[0]));
    }
    
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-olive-100'>
      <button className='top-1 absolute right-5 bg-red-500 rounded-full p-1 h-7 w-7 flex items-center justify-center text-white active:scale-96'
      onClick={()=>{props.navito('employees')}}><X/></button>
      <div className='h-146 w-120 bg-white rounded-2xl p-3 '>
        <form className='flex flex-col gap-2' onSubmit={(e)=>{
          handlesubmit(e);
        }}>
        <span className='w-full flex justify-center text-2xl mb-4 font-bold'>Add Employees</span>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Name</span>
            <input type="text" placeholder='Enter Name' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setname(e.target.value);
            }} value={name}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Email</span>
            <input type="email" placeholder='abc@gmail.com' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setemail(e.target.value);
            }} value={email}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Password</span>
            <input type="password" placeholder='***' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setpass(e.target.value);
            }} value={pass}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Employee ID</span>
            <input type="text" placeholder='#3213' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setid(e.target.value);
            }} value={id
            }/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Profile Pic</span>
            <input type="url" placeholder='Profile pic' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setphotourl(e.target.value);
            }} value={photourl}/>
        </label>
        <label className='flex flex-col gap-2 '>
            <span className='font-medium'>Role</span>
            <input type="text" placeholder='design,dev etc' className='border border-slate-300 rounded-2xl py-1 px-3'
            onChange={(e)=>{
              setrole(e.target.value);
            }} value={role}/>
        </label>
        </form>
        <div className='w-full flex justify-center mt-6 gap-2'>
        <button className='bg-red-400 py-1 w-50 hover:bg-red-600 transition-colors ease-in-out rounded-2xl text-md font-medium active:scale-98' onClick={()=>{clr();}}>Cancel</button>
        <button className='bg-green-400 py-1 w-50 hover:bg-green-600 transition-colors ease-in-out rounded-2xl text-md font-medium active:scale-98' onClick={
            (e)=>{handlesubmit(e)}
        }>Add Employee</button>
        </div>
      </div>
    </div>
  )
}

export default AddEmp