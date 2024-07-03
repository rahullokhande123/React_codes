import { useState } from "react";
const App=()=>{
     const [color,setColor] = useState("White");
    const myColor=()=>{
      setColor("Green")
    }
  return(
    <>
      <h1>Hello we are Cybrom Student : {color}</h1>
      <button onClick={myColor} >Click Here</button>
    </>
  )
}
export default App;
