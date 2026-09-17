import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import EmployeesCard from '../Components/EmployeesCard'
import { AuthContext } from '../Context/AuthProvider'

function EmployeesPage(props) {
  const [userdata,setuserdata]=useContext(AuthContext)
  return (
    <div className='flex'>
        <Sidebar navito={props.navito} handlelogout={props.handlelogout} user={'admin'}/>
        <div className='flex flex-col p-6 w-5/6'>
      <div className=' w-full pb-5 border-b-2 border-slate-200 flex justify-between'>
      <span className='text-3xl flex items-center'>Team Directory</span>
      <button className='hover:shadow-sm transition-all text-md bg-blue-200 rounded-full py-1 px-2 text-blue-900 active:scale-98' 
      onClick={()=>{
        props.navito('add-emp');
      }}
      >Add Employee</button>
    </div>
      <span className='w-full text-xl mt-3 font-normal'>Manage and view all registered system personnel</span>
      <div className='w-full h-full mt-5 '>
        
        <div className='flex flex-wrap gap-6 h-140  overflow-y-auto'>
          {
            userdata[0].map((ele,idx)=>{
            return  <EmployeesCard key={idx} emp={ele}/>
            })
          }
        </div>
      </div>
    </div>

    </div>
  )
}

export default EmployeesPage
