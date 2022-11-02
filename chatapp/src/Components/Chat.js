import { collection, onSnapshot,query,orderBy, } from 'firebase/firestore';
import React from 'react'
import {useState , useEffect, useRef} from "react"
import { database } from '../firebase';
import Messages from './Messages'
import SendMessage from './SendMessage';

const style={
    main: `flex flex-col p-[10px] relative`
}
function Chat() {
    const [messages, setMEssages]=useState([]);
    const latest= useRef();

    useEffect(()=>{
        const q=query(collection(database,"messages"),orderBy("timestamp"))
        const unsub=onSnapshot(q,(querySnapshot)=>{
            let message=[]
            querySnapshot.forEach((doc)=>{
                message.push({...doc.data(),id:doc.id})
            })
            setMEssages(message)
        })
        return()=>unsub();

    },[]);
    return (
        <>
        <main className={style.main}>
            {messages && messages.map(message=>
               ( <Messages key={message.id} message={message}/>)
            )}
            
        </main>
        <SendMessage latest={latest}/>
        <span ref={latest}></span>
        </>

  )
}

export default Chat