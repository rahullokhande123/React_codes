// import { useSelector,useDispatch } from "react-redux";
// import { myinc,mydic } from "./counterSlice";

// const App=()=>{

//     const Counter=useSelector((state)=>state.mycounter.cnt)
//     const mydis=useDispatch();
//     return(
//         <>
//         <h1>My Counter</h1>
//         <button onClick={()=>{mydis(myinc())}}>Increment</button>
//         <h1> {Counter} </h1>
//         <button onClick={()=>{mydis(mydic())}}>Decrement</button>
//         </>
//     )
// }
// export default App;

// useSelecter ka use 

// =====================================================

// import { useSelector,useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";
// import { useState } from "react";

// const App=()=>{
//     const myclr=useSelector((state)=>state.mycolor.bgcolor);
//     const mydis=useDispatch();
//     const [clr,setClr]=useState("")

//     return(
//         <>
//         <h1>Redux Tool Kit </h1>
//         Enter Color Name: <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}} />
//         <button onClick={()=>{mydis(changeColor(clr))}}>Change</button>
//         <div style={{width:"400px",height:"400px",backgroundColor:myclr,border:"1px solid black",borderRadius:"10%",margin:"50px"}}></div>
//         </>
//     )
// }
// export default App;

import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";

const App=()=>{

    const myclr=useSelector((state)=>state.mycolor.bgcolor);
    const mydis=useDispatch();
    const [input,setInput]=useState("");
    return(
        <>
        Enter Color Name <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={()=>{mydis(changeColor(input))}}>Change</button>
        <div style={{width:"400px",height:"400px",backgroundColor:myclr,border:"1px solid black",borderRadius:"10%",margin:"50px"}}></div>
        </>
    )
}
export default App;