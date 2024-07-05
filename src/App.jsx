import { useState } from "react";
import { useEffect } from "react";

const App=()=>{

  const [cnt,setCnt]=useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setCnt(cnt+1);
    },2000);
  });
   return(
    <>
      <h1>Application Form :{cnt} </h1>
    </>
   )
}
export default App;
