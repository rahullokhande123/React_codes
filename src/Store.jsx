// import { configureStore } from "@reduxjs/toolkit";
// import myans from "./counterSlice";

// const store=configureStore({

//     reducer:{
//         mycounter:myans
//     }
// })
// export default store;

// ==================================================

// import { configureStore } from "@reduxjs/toolkit";
// import myans from './counterSlice';

// const store=configureStore({
//     reducer:{
//         mycounter:myans
//     }
// })
// export default store;

//====================================================

// import { configureStore } from "@reduxjs/toolkit";

// import myreducer from "./colorSlice";

// const store=configureStore({
//     reducer:{
//         mycolor:myreducer
//     }
// })
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./colorSlice";

const store=configureStore({
    reducer:{
        mycolor:myreducer
    }
})
export default store;