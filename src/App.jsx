
import { mycolorContext } from "./ColorContext"
import { useContext, useState } from "react"


const App=()=>{

  const [txt,setTxt]=useState("");
  const {color,setColor}=useContext(mycolorContext)
  return(
    <>
    <h1>Wellcome To Cybrom</h1>
    Enter Color <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}} />
    <button onClick={()=>{setColor(txt)}}>Click Here</button>
    <div style={{width:"400px",height:"400px",border:"2px solid black",backgroundColor:color}}></div>
    
    </>
  )
}
export default App