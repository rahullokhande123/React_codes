
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./toDoSlice";

const Store=configureStore({
    reducer:{
        todolist:todoReducer
    }
})
export default Store;