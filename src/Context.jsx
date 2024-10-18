// import { createContext } from "react";
// import { useState } from "react";

import { createContext, useState } from "react"

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

const myContext=createContext()
const myColorContext=({children})=>{
    const [color,setColor]=useState("gray")

    return(
        <>
        <myContext.Provider value={{color,setColor}} >
            {children}
        </myContext.Provider>
        </>
    )
}
export default myColorContext;
export {myContext}