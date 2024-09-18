import { createContext } from "react";
import { useState } from "react";

const myContext=createContext();
const Context=({children})=>{

  const [myVlaue,setMyvalue]=useState=("Rahul Lokhande");

  return(
    <>
    <myContext.Provider value={{myVlaue,setMyvalue}}>
      {children}
    </myContext.Provider>
    </>
  )
}
export default Context; 
export {myContext};