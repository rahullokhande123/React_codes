import { courseContext } from "./App";
import { useContext } from "react";

const Indore=()=>{
    const {course,setCourse}=useContext(courseContext);
    return(
      <>
      <button onClick={()=>{setCourse("C++")}} >Click</button>
      <h1>Wellcome In Indore {course} Class</h1>
      </>
    )
  }
  export default Indore;
