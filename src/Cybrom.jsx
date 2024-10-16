// import College from "./College";

import { useState } from "react";
const Cybrom=(props)=>{
    const [name,setName]=useState("Arun");
    const [color,setColor]=useState("Green")
    return(
        <>
           <h1 style={{backgroundColor:color}}> I am {name} {props.Lnm}</h1>
           {/* <College/> */}
           <button onClick={()=>{setName("Rahul")}}>Click</button>
           <button onClick={()=>{setColor("Yellow")}}>Color</button>
        </>
    )
}
export default Cybrom;

