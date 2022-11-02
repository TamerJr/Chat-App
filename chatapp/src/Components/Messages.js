import React from 'react'
import { auth } from '../firebase'


const style={
    message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full `,

    sent :`bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received :`bg-[#e5e5ea] text-black float-left rounded-br-full`
}
function Messages({message}) {
    const messageClass=
        message.uid===auth.currentUser.uid?
        `${style.sent}`:
        `${style.received}`
    
  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
        
            <p> {message.text}</p>
        </div>
    </div>
  )
}

export default Messages   