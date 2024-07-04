import { useState } from "react"

const App=()=>{
  const [empno,setEmpno]=useState("");
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const [salary,setSalary]=useState("");

  const submitHandle=()=>{
    let store={empno:empno,name:name,city:city,salary:salary};
    console.log(store);
  }

     
  return(
    <>
      <h1> Application Form </h1>
      Enter Empno: <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
      <br />
      Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  />
      <br />
      Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}  />
      <br />
      Enter Salary <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}}  />
      <br />
      <button onClick={submitHandle}>Data Save</button>

    </>
  )
}
export default App;
