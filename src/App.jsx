

// import { useState } from "react";
// import { createContext } from "react";
// import Cybrom from "./Cybrom";
// import College from "./College";

// const myContext=createContext();

// const App=()=>{
//   const [myvalue,setMyvalue]=useState("I am a Developer");

//   return(
//     <>
//        <myContext.Provider value={{myvalue}} >
//                 <College/>
//        </myContext.Provider>
    
//     </>
//   )
// }
// export default App;
// export {myContext};

// import { createContext } from "react";
// import { useState } from "react";
// import College from "./College";

// const myContext=createContext();
// const App=()=>{
//   const [myvalue,setMyvalue]=useState(" I am Developer ");
  
//   return(
//     <>
//        <myContext.Provider value={{myvalue}}>
//                <College/>
//        </myContext.Provider>
//     </>
//   )
// }
// export default App;
// export {myContext}

import { createContext } from "react";
import { useState } from "react";

const myContext=createContext();
const App=({children})=>{

  const [myVlaue,setMyvalue]=useState=("Rahul Lokhande");

  return(
    <>
    <myContext.Provider value={{myVlaue,setMyvalue}}>
      {children}
    </myContext.Provider>
    </>
  )
}
export default App; 
export {myContext};