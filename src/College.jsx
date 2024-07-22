  
  import { myContext } from "./App";
  import { useContext } from "react";
  
  const College=()=>{
  
    const {user}=useContext(myContext)
      return(
        <>
        <h1> This Area Of : {user}</h1>
        
        </>
      )
    }
    export default College;