import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/Localstorage';
export const AuthContext=createContext();
function AuthProvider(props) {
  const [userdata,setuserdata]=useState(getLocalStorage())
    return (
    <div>
    <AuthContext.Provider value={[userdata,setuserdata]}>
      {props.children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
