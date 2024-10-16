
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4";

import img1 from "./r1.jpg"

import { useState } from "react";

const name="Rahul";
const age=24;
const DOB="07/08/2000";
const city="Athner";
// =============================

const Customer={
  'nm':"Aman",
  'ag':28,
  'cit':"Bhopal",
  'pro':"I Phone 14pro"
}

// ==========================================

const my_list=["Ram, ","Syam, ","Mohan, ","Sohan, ",85,96,"Aman"];
const my_ages=[24,20,6,8,10,13];

const ageData=my_ages.map((key)=>{
  return(
    <>
    <option>{key+10}</option>
    </>
  )
})

const ans=my_list.map((key)=>{
  return(
    <>
       <td>{key}</td>
    </>
  )
})
// ===========================================

const myhead={
  color:"blue",
  fontFamily:"verdana"
}
const myhead1={
  color:"green",
  fontFamily:"arial",
  fontSize:"30px",
  textDecoration:"underline"
}

// ============================================

const myName=(nm)=>{
  alert(" This is area of : " + nm + ","+" let's play ")
}


const App=()=>{

  const [course,setCourse]=useState("Python")
  const [color,setColor]=useState("Green")
  const [count,setCount]=useState(0)
  const [name,setName]=useState("")
  const [city,setCity]=useState("")

  const Inc=()=>{
    setCount(count+1)
  }
  const Dec=()=>{
    setCount(count-1)
  }
  const Res=()=>{
    setCount(0)
  }

  // ====================================

  const Submit=()=>{
    let InputeVAL={name:name, city:city}
    alert(InputeVAL.name+" "+InputeVAL.city)
  }
  
  return(

    <>
    <h1>App Componente</h1>
    <Page1/>
    <Page2/>
    <h2>===================================</h2>
    <b>This data Passed By Props In App To Page3</b>
    <Page3 name={name} age={age} DOB={DOB} city={city} />
    <Page4 nm={Customer.nm} ag={Customer.ag} cit={Customer.cit} pro={Customer.pro} />
    {/* ========================================================================== */}
    <h2>This data come to a list by map method</h2>
    {ans} <br />
    
    <b>Actual DAta: age=[24,20,6,8,10,13];</b> <br />
    <b>Second List Data result + by 10 </b> <br />
    Final Result : <select>{ageData}</select>
    <h2>===================================</h2>
    {/* =========================================================================== */}
    <h2>CSS Applyed By Create CSS Component </h2>

      <h1 style={myhead}>Wellcom to cybrom Bhopal!!!!</h1>
      <h1 style={myhead1}>Hellow we are cybrom student</h1>
    <h2>===================================</h2>

    <h1 className="head1">Hello Devoloper's, Wellcom to cybrom Bhopal!!!!</h1>
    <h2>===================================</h2>
    <h2>2 Type geting Image by import(In src) and direct(public folder)</h2>

    <img src={img1} alt="" width="250px" height="200px" />
    <img src="public/c4.jpg" alt="" width="250px" height="200px" />

    <h2>===================================</h2>

    <>
      <h1>Wellcome To Gaming World</h1>
      <button onClick={()=>{myName("PUBG")}}>Click Here</button>
    </>

    <h2>===================================</h2>
    <h2>Hooks :- </h2>
    <h2 style={{color:color,fontSize:"40px"}}> Course : {course}</h2>  <br />
    <button onClick={()=>{setCourse("Django")}}>Click For Change Course</button>
    <button onClick={()=>{setColor("yellow")}}>Change Color</button>

    <h2>Counter Program ======</h2>
    <h1>Counter : {count}</h1>
    <button onClick={Inc}>Increment</button>
    <button onClick={Dec}>Decrement</button>
    <button onClick={Res}>Clear</button> <br />

    <h2>===================================</h2>
    <h1> Application Form </h1>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
    <button onClick={Submit}>Submit</button>

    </>
  )
}
export default App