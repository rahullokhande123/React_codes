

// import { useContext } from "react";
// import { myContext } from "./App";

// const College=()=>{
//     const {myvalue}=useContext(myContext)

//     return(
//         <>
//          <h1>{myvalue}</h1>  
//         </>
//     )
// }
// export default College;

// import { useContext } from "react";
// import { myContext } from "./App";

// const College=()=>{
//     const {myvalue}=useContext(myContext);
//     return(
//         <>
//            {myvalue}
//         </>
//     )
// }
// export default College;
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Contect=(props)=>{
    const [count,setCount]=useState(0)
    const [nm,setNM]=useState("")
    const [no,setNo]=useState("")

    const inc=()=>{
        setCount(count+1)
    }
    const dic =()=>{
        setCount(count-1)
    }

    const submit=()=>{
        let store={number:no,name:nm};
        console.log(store)
    }






   const [mydata,setMydata]=useState([])

   const loadData=()=>{
    let api="http://localhost:3000/Student";
    axios.get(api).then((res)=>{
        setMydata(res.data)
        console.log(res.data)
    });
   }
   useEffect(()=>{
    setCount()
   },[]);

   const ans=mydata.map((key)=>{
    return(
        <>
        <tr>

            <td>{key.name}</td>
            <td>{key.userid}</td>
            <td>{key.email}</td>
            <td>{key.password}</td>
        </tr>
        </>
    )
   })








    return(
        <>
        <h6>9685608424 {props.nm} </h6>
        <h1>Counter Program</h1>
        <h2>{count}</h2>
        <button onClick={inc}>Inc</button>
        <button onClick={dic}>Dec</button>
        <br />
        <h1>Input</h1>
        <input type="text" name="nm" value={nm} onChange={(e)=>{setNM(e.target.value)}} /> <br />
        <input type="text" name="no" value={no} onChange={(e)=>{setNo(e.target.value)}} /> <br />
        <button onClick={submit}>Submit</button>

        <br />
        <hr />

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
          <th>Email </th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Contect;