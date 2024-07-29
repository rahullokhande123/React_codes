import { configureStore } from "@reduxjs/toolkit";
import myans from "./counterSlice";

const store=configureStore({

    reducer:{
        mycounter:myans
    }
})
export default store;