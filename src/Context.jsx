// import { createContext } from "react";
// import { useState } from "react";

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

const Address=(props)=>{
    const Display=()=>{
        alert("Full Address NOT Yet")
    }
    const ad=(add)=>{
        alert("I am parmanently from :"+ add.type )
    }
    
    return(
        <>
        <h3>Ashoka Garden Bhopal M.P.</h3>
        <h3>{props.key1}</h3>
        <h4>{props.key2}</h4>

        <button onClick={ad}>Full Address</button>
    
        </>
    )
}
export default Address;