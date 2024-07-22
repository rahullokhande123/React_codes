import Bhopal from "./Bhopal";
import { useState } from "react";
import { createContext } from "react";

const courseContext=createContext();
const App=()=>{

  const [course,setCourse]=useState("Java");
  return(
    <>
    <button onClick={()=>{setCourse("Python")}} >Click Here</button>
    <h1>  {course} Programing Langauge </h1>
    <courseContext.Provider value={{course,setCourse}}>
      <Bhopal/>
    </courseContext.Provider>
    </>
  )
}
export default App;
export {courseContext};
