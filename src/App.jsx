

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

import { useContext } from "react";
import { myContext } from "./Context";

const App=()=>{

  const {myVlaue,setMyvalue}=useContext(myContext);
  
  return(
    <>
    <h1>Wellcome {myVlaue}</h1>
    <button onClick={()=>{setMyvalue("Python Devoloper")}}>Change</button>
    </>
  )
}
export default App; 
export {myContext};