// import { createSlice } from "@reduxjs/toolkit";

// const colorSlice=createSlice({
//     name:"mycolor",
//     initialState:{
//         bgcolor:"red"
//     },
//     reducers:{
//         changeColor:(state,actions)=>{
//             state.bgcolor=actions.payload;
//             // console.log(actions.payload)
//         }
//     }
// })
// export default colorSlice.reducer;
// export const {changeColor}=colorSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"darkblue"
    },
    reducers:{
        changeColor:(store,actions)=>{
             store.bgcolor=actions.payload
        }
    }
})
export default colorSlice.reducer;
export const {changeColor}=colorSlice.actions;