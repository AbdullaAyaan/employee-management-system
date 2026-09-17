import React, { useState } from 'react'
import { LogIn } from 'lucide-react';
import { getLocalStorage } from '../utils/Localstorage';

function Login(props) {

  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  
  const submithandle=(e)=>{
    e.preventDefault();
    props.handlelogin(email,password);
    getLocalStorage();
    setemail("");
    setpassword("");
    
    
  }




  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      
      <div className='h-80 w-75 bg-yellow-100 rounded-2xl py-6 px-8'>
        <div className='h-full w-full '>
        <div className='h-9 w-9 bg-white rounded-xl flex justify-center items-center shadow-xl m-auto'>
          <LogIn color="#746d6d" />
        </div>

      <div className='mt-2 flex justify-center flex-col'>
          <span className='text-center text-xl font-medium'>Sign in with email</span>
          <span className='text-center text-md text-slate-500'>Manage the employees and teams together.For free</span>
      </div>
      <div>

        <form className='flex flex-col gap-3 mt-3' onSubmit={(e)=>{
          submithandle(e);
        }}>

        <input id='email' type="email" required placeholder='Email' className='bg-slate-100 w-full rounded-3xl py-0.5 px-3 border-none  active:border-none shadow-2xs'
        onChange={(e)=>{
          setemail(e.target.value)
          
        }}
        value={email}
        />
        <input id='pas' type="password" required placeholder='Password' className='bg-slate-100 w-full rounded-3xl py-0.5 px-3 border-none  active:border-none shadow-2xs'
        onChange={(e)=>{
          setpassword(e.target.value)
          
        }}
        value={password}
        />
        <button className='w-full flex justify-end text-[12px] '>Forget password?</button>
        <button className='w-full flex justify-center bg-black text-white py-2 rounded-3xl font-medium text-lg' onClick={()=>{
          
        }}>Get Started</button>
      </form>
      </div>
      </div>

      </div>
    
    </div>
  )
}

export default Login
