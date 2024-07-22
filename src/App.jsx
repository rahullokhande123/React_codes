import { useState } from "react";
import Cybrom from "./Cybrom";
import { createContext } from "react";

const myContext=createContext();
const App=()=>{
 const [user,setUser]=useState("GAMING ZONE")
 
  return(
    <>
    <h1>{user}</h1>
    <myContext.Provider value={{user}}>
      <Cybrom/>
    </myContext.Provider>
 
    </>
  )
}
export default App;
export {myContext};