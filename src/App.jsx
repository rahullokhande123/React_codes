import { useState } from "react";
const App=()=>{
     const [name,setName] = useState("Rahul")
  return(
    <>
      <h1>Hello we are Cybrom Student : {name}</h1>
      <button onClick={()=>{setName("ARUN")}} >Click Here</button>
    </>
  )
}
export default App;
