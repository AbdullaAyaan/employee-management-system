import React, { useContext, useEffect, useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'
import EmployeeDashboard from './Pages/EmployeeDashboard'
import { AuthContext } from './Context/AuthProvider'
import Addtask from './Components/Addtask'
import TasksPage from './Pages/TasksPage'
import EmployeesPage from './Pages/EmployeesPage'
import AddEmp from './Components/AddEmp'
import SettingsPage from './Pages/SettingsPage'
function App() {
  const [user,setuserr]=useState(null)
  const [userdata,setuserdata]=useContext(AuthContext);
  
  const empdata=userdata[0];
  const admindata=userdata[1];
  const authdata=useContext(AuthContext);
  
  const handlelogin=(email,password)=>{
    if(email===admindata[0].email && password==='123'){
      setuserr('admin');
  localStorage.setItem("loggedinUser",JSON.stringify({role:'admin'}));
    }
    else if(authdata){
    const emp=empdata.find((ele)=>email===ele.email && password===ele.password);
    if(emp){
     setuserr('user');
     localStorage.setItem("loggedinUser",JSON.stringify({role:'user'})) 
    localStorage.setItem("currentemp",JSON.stringify(emp));
    }
  }
}

const handlelogout=()=>{
  setuserr(null)
  localStorage.removeItem("loggedinUser");
  localStorage.removeItem("currentemp")
}

  useEffect(()=>{
    if(authdata){
      const loggedin=JSON.parse(localStorage.getItem("loggedinUser"));
      if(loggedin){
        setuserr(loggedin.role)
      }
    }
  },[])
console.log(user);

const [curretview,setcurrentview]=useState('Dashboard');

function changeview(){
  if(!user){
    return <Login  handlelogin={handlelogin}/>
  }
  if(user==='admin'){
    switch(curretview){
    case 'addtask':
      return <Addtask onremovetask={()=>setcurrentview('dashboard')} navito={(view)=>setcurrentview(view)}/>
    case 'tasks':
    return <TasksPage navito={(view)=>setcurrentview(view)} handlelogout={handlelogout}/>
    case 'employees':
      return <EmployeesPage navito={(view)=>setcurrentview(view)} handlelogout={handlelogout}/>
    case 'add-emp':
      return <AddEmp navito={(view)=>{setcurrentview(view)}}/>
      default:
      return <Dashboard handlelogout={handlelogout} onaddtask={()=>setcurrentview('addtask')} navito={(view)=>{setcurrentview(view)}}/>
    }
  }
  if(user==='user'){
    switch(curretview){
      case 'setting':
        return <SettingsPage handlelogout={handlelogout} navito={(view)=>{setcurrentview(view)}}/>
      default:
        return <EmployeeDashboard handlelogout={handlelogout} navito={(view)=>{setcurrentview(view)}}/>
      }
  }
}

  return (
    <div>
      {/* {isaddtask?<Ad dtask onremovetask={()=>setisaddtask(false)}/>:(user==='admin'?<Dashboard handlelogout={handlelogout} onaddtask={()=>setisaddtask(true)}/>:(user==='user'?<EmployeeDashboard handlelogout={handlelogout}/>:<Login handlelogin={handlelogin}/>))} */}
      {changeview()}
    </div>
  )
}

export default App
