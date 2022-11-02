import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import {auth,database} from "../firebase"
const style ={
    form:`h-14 w-full max-w-[730px] flex text-xl absolute bottom-0`,
    input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button:`w-[20%] bg-green-500`
}
function SendMessage({latest}) {
    const [input ,setInput]=useState("")


    const sendMessage=async(e)=>{
        e.preventDefault();
        if(input===""){
            alert("please enter a valid message")
            return
        }
        const {uid}=auth.currentUser
        
        await addDoc(collection(database,"messages"),{
            text:input,
            
            uid,
            timestamp:serverTimestamp()
        })
        setInput("")
        latest.current.scrollIntoView({behavior:"smooth"})
        
    }
    
  return (  
    <form onSubmit={sendMessage}
    className={style.form}>
    <input className={style.input} onChange={(e)=>setInput(e.target.value)} value={ input} type="text" placeholder='Message'/ >
    <button type='submit' className={style.button}>Send</button>
    </form>
    )}
  

export default SendMessage