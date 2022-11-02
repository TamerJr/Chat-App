import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'


const style ={
    Nav:`bg-gray-600 h-2- flex justify-between items-center p-4`,
    heading:`text-white text-3xl`,
}

function NavBar() {
    const [user]=useAuthState(auth)

  return (
    <div className={style.Nav}>
        <h1 className={style.heading}>Chat App</h1>
        {!user? <SignIn/>:
        <LogOut/>}
    </div>
  )
}

export default NavBar