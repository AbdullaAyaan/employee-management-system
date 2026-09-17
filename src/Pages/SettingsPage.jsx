import React, { useContext, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import EmployeesCard from '../Components/EmployeesCard'
import { AuthContext } from '../Context/AuthProvider';
function SettingsPage(props) {
  const initialemp=JSON.parse(localStorage.getItem("currentemp"));
  const [userdata,setuserdata]=useContext(AuthContext);
  const [curemp,setcuremp]=useState(initialemp);
  const [abt,setabt]=useState(initialemp.about);
  const [photo,setphoto]=useState(initialemp.photo);
  const [pass,setpass]=useState('');
  const [confirmpass,setconfirmpass]=useState('');
  let upcuremp=[];
  const handlesubmit=()=>{
    const updateuser=userdata[0].map((ele)=>{
      if(initialemp.name.trim().toLowerCase()!==ele.name.trim().toLowerCase() && initialemp.email.trim().toLowerCase()!==ele.email.trim().toLowerCase()){
      return ele
      }
      else{
        ele.about=abt;
        ele.photo=photo;
        if(pass.length>0){
          if(pass===confirmpass){
            ele.password=pass;
          }
        }
        upcuremp.push(ele);
        setcuremp(ele)
        return ele
      }
    })
    const upuser=[];
    upuser.push(updateuser);
    upuser.push(userdata[1]);
    setuserdata(upuser);
    localStorage.setItem("employees",JSON.stringify(updateuser));
    localStorage.setItem("currentemp",JSON.stringify(curemp));
  }

  return (
    <div className='h-full w-full flex'>
      <Sidebar navito={props.navito} handlelogout={props.handlelogout}/>
      <div className='flex flex-col p-6 w-5/6'>
      <div className=' w-full pb-5 border-b-2 border-slate-200 justify-between'>
      <span className='w-full text-3xl flex items-center'>Account Settings</span>
    </div>
      <span className='w-full text-xl mt-3 font-normal'>Update your personal info and security details</span>
      <div className='flex grow'>
          <div className='w-2/5 mt-20 flex flex-col gap-4 items-center'>
          <span className='text-xl ml-4 '>Profile Preview</span>
            <EmployeesCard emp={curemp}/>
          </div>
          <div className='w-3/5 border-l-2  border-slate-300 mt-20 flex justify-between flex-col'>
          <div>
          <span className='text-xl ml-4'>Update Account Data</span>
          <div className=''>
            <form className='p-5 flex flex-col ' onSubmit={()=>{
              handlesubmit();
            }}>
            <span>
              About Me</span>
              <textarea name="abt" id="abt" className='border border-slate-300 rounded-xl pl-2'onChange={(e)=>{setabt(e.target.value)}} value={abt} rows={5}>

              </textarea>
            <span className='mt-8'>Photo URL & Password</span>
            <div className='flex mt-5'>
            <div className='w-1/2'>
              <span className='mr-2'>Photo URL</span>
              <input type="url" className='border border-slate-300 rounded-full pl-2 py-1' value={photo} onChange={(e)=>{setphoto(e.target.value)}}/>
            </div>
            <div className='w-1/2 '>
              <span className='mr-18'>Password</span>
              <input type="password" id="pass" className='border border-slate-300 rounded-full pl-2 py-1' value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
              <div className='mt-4'>
               <span className='mr-3'>Confirm password</span>
               <input type="text" id='pass' className='border border-slate-300 rounded-full pl-2 py-1' value={confirmpass} onChange={(e)=>{setconfirmpass(e.target.value)}}/>
            </div>
            </div>
            </div>
            </form>
          </div>
          </div>
          <div className='w-full flex justify-end '>
            <button className='bg-green-400  rounded-xl py-1 px-2' onClick={()=>{
              handlesubmit();
            }}>Save Changes</button>
          </div>
          </div>
      </div>
      </div>
    </div>

  )
}

export default SettingsPage
