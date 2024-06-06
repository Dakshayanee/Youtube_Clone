import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const ChatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[],
    },
reducers:{
    addMessage:(state,action)=>{
        //after every 10 msg remove 1 msg which avoid explosion of messages in live chat
       // state.messages.splice(LIVE_CHAT_COUNT,1)
       
       // Ensure state.messages does not exceed LIVE_CHAT_COUNT
       if (state.messages.length >= LIVE_CHAT_COUNT) {
        state.messages.pop();
    }
        state.messages.unshift(action.payload);
    }
}

})

export const {addMessage} =ChatSlice.actions
export default ChatSlice.reducer;