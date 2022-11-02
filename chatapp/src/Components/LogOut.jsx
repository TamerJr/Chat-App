import React from 'react'
import {auth} from "../firebase"
const style={
    button :`bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

function LogOut() {
    const signOut=()=>{
        signOut(auth)
    }
  return (
    <div onClick={()=>auth.signOut()} className={style.button}>Log Out </div>
  )
}

export default LogOut