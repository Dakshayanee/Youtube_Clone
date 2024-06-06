import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:'search',
    initialState:{

    },
    reducers: {
        cacheResults:(state ,action)=>{
            // {"ip:"["iphone","iphone11"]}
            // this will merge the payload and state
            //thats merge 2 objects
            state =Object.assign(state, action.payload);
        },
    },
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;