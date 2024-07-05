import { useState } from "react";
import { useEffect } from "react";


const App=()=>{

  const [cnt,setCnt]=useState(0);
  const [multi,setMulti]=useState(1);

    useEffect(()=>{
      setMulti(cnt*2);
    },[cnt])

   return(
    <>
       <button onClick={()=>{setCnt(cnt+1)}} >Click Here</button>
      <h1>Application Form :{cnt} </h1>
      <h1>Multiplication:{multi}</h1>
    </>
   )
}
export default App;