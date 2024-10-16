

// import { useState } from "react";
// import { createContext } from "react";
// import Cybrom from "./Cybrom";
// import College from "./College";

import { useState } from "react";

// const myContext=createContext();

// const App=()=>{
//   const [myvalue,setMyvalue]=useState("I am a Developer");

//   return(
//     <>
//        <myContext.Provider value={{myvalue}} >
//                 <College/>
//        </myContext.Provider>
    
//     </>
//   )
// }
// export default App;
// export {myContext};

// import { createContext } from "react";
// import { useState } from "react";
// import College from "./College";

// const myContext=createContext();
// const App=()=>{
//   const [myvalue,setMyvalue]=useState(" I am Developer ");
  
//   return(
//     <>
//        <myContext.Provider value={{myvalue}}>
//                <College/>
//        </myContext.Provider>
//     </>
//   )
// }
// export default App;
// export {myContext}

// import { myContext } from "./Context";
// import { useContext } from "react";
// const App=()=>{
//   const {course,setCourse}=useContext(myContext);
//   return(
//     <>
//     <h1>Wellcome {course}</h1>
//     <button onClick={()=>{setCourse("Python")}}>Change</button>
//     </>
//   )
// }
// export default App;


import Cybrom from "./Cybrom";
import Contect from "./College";
import Address from "./Context";

const mydata=[
  {
    "key1":"Rahul Lokhande",
    "key2":24,
    "key3":"Bhopal"
  }
]
const myhead={
  color:"blue",
  fontFamily:"verdana"
}


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
const App=()=>{
  // const ans=mydata.map((key)=>{
  //   return(
  //     <>
  //     <table border={1}>
  //       <tr>
  //       <th>Name</th>
  //       <th>Age</th>
  //       <th>City</th>
  //       </tr>
  //       <tr>
  //         <td>{key.key1}</td>
  //       </tr>
  //     </table>
  //     </>
  //   )
  // })
return(
    <>
    {/* <h1 id="rahul">Rahul</h1>
    < Cybrom/>
    <Address/>
    {ans}

    <label htmlFor="carstore">Select Car</label>
    <select name="carstore" id="carstore">
      <option value="select">Select</option>
      <option value="Mercdis">Mersedis</option>
      <option value="thar">Thar</option>
      <option value="bulero">Bolero</option>
    </select> */}

  <BrowserRouter>
  
            <Routes>
                  <Route path="/" element={<Layout/>}>
                  {/* <Route index element={<Layout/>}></Route> */}
                  <Route path="/context" element={<Address/>}></Route>
                  <Route path="/cybrom" element={<Cybrom/>}></Route>
                  <Route path="college" element={<Contect/>}></Route>
                  </Route>
            </Routes>

  </BrowserRouter>

    </>
  )
}
export default App