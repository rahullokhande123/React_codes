
import { createSlice } from "@reduxjs/toolkit";

const myToSlice=createSlice({
    name:"myTask",
    initialState:{
        task:[]
    },
    reducers:{
        overTask:(state,actions)=>{
            state.task.push(actions.payload)
        },

// Delete First Way(to pop) =============================
        // overDelTask:(state,actions)=>{
        //     state.task.pop(actions.payload)
        // }

// Delete Seconde Way ===========================

        // delTask:(state,actions)=>{
        //     console.log(actions.payload);
        //     state.task=state.task.filter(item=> item.id!=actions.payload)
        // },

// Delete Third Way ============================
        delTask:(state,actions)=>{
            console.log(actions.payload);
            state.task=state.task.filter((key)=>{
                if(key.id==actions.payload){
                    return false;
                }
                else{
                    return true;
                }
            })
        },



        compTask:(state,actions)=>{
            for(var i=0 ; i<state.task.length; i++){
                if(state.task[i].id == actions.payload){
                    state.task[i].state="complete";
                }
            }
        }


    }
})
export default myToSlice.reducer;
export const {overTask,delTask,compTask}=myToSlice.actions;