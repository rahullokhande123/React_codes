// import { createContext } from "react";
// import { useState } from "react";

//import { createContext, useState } from "react"

// const myContext=createContext();
// const CourseContext=({children})=>{
//     const [course,setCourse]=useState("PHP")

//     return(
//         <>
//         <myContext.Provider value={{course,setCourse}}>
//               {children}
//         </myContext.Provider>
//         </>
//     )
// }
// export default CourseContext;
// export {myContext};

// const myContext=createContext()
// const mycolorContext=({children})=>{
//     const [mycolor,setMycolor]=useState("gray")

//     return(
//         <>
//         <myContext.Provider value={{mycolor,setMycolor}} >
//             {children}
//         </myContext.Provider>
//         </>
//     )
// }
// export default mycolorContext;
// export {myContext}

import { createContext } from "react"
import { useState } from "react"

const myContext=createContext();
const ColorContext=({children})=>{

    const [color2,setColor2]=useState("green")

    return(
        <>

         <myContext.Provider value={{color2,setColor2}}>
            {children}
         </myContext.Provider>
        
        </>
    )
}
export default ColorContext;
export {myContext};