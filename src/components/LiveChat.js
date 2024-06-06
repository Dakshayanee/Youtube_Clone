import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
//import * as helper from '../utils/helper';

const LiveChat = () => {

    const [liveMessage,setLiveMessage]=useState("");

    const dispatch=useDispatch();
   //apply map on the store
   const ChatMessages = useSelector((store) => store.chat.messages) || [];

  //For API Polling
    useEffect(()=>{
       const i= setInterval(()=>{
         //API Polling
         //console.log("Api Polling")
         dispatch(
            addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20),
         })
         );

        },1500);
          
        return () => clearInterval(i);
    },[])

  return (
    <>
   <div className="ml-2 w-[600px] h-[400px] p-2 border-4 border-gray-400 bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse shadow-md">
  <div>
    {ChatMessages.length > 0 &&
      ChatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
  </div>
  </div>

<form
  className="w-[600px] p-2 ml-2 border border-gray-400 bg-slate-100 rounded-lg shadow-md" 
  onSubmit={(e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Daksh",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  }}
>
<input
    className="px-2 w-96 border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    type="text"
    value={liveMessage}
    onChange={(e) => {
      setLiveMessage(e.target.value);

    }}
  />
  <button className="px-2 mx-4 bg-green-50">Send</button>
</form>

  </>
  )
}

export default LiveChat