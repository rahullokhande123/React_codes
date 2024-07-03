import { useState } from "react";
const App=()=>{
    const [cnt,setCnt]=useState(0);
    const myInc=()=>{
      setCnt(cnt+1)
    }
    const myDec=()=>{
      setCnt(cnt-1)
    }
    const myRes=()=>{
      setCnt(0)
    }
  return(
    <>
      <center>
      <h1>Please Count Actions</h1>
      <h1> Count : {cnt}</h1>
      <button onClick={myInc}> Increment </button>
      <button onClick={myDec}> Decriment </button>
      <button onClick={myRes}> Reset</button>
      </center>
      
    </>
  )
}
export default App;
