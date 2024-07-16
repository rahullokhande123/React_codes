
import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Update=()=>{

  const [mydata,setmydata]=useState([])

  const loadData=()=>{
    let url="http://localhost:3000/Student";
    axios.get(url).then((res)=>{
      setmydata(res.data)
    })
  }
  useEffect(()=>{
    loadData()
  },[])

  const mydel=(myid)=>{
    let url=`http://localhost:3000/Student/${myid}`
    axios.delete(url).then((res)=>{
      alert("DATA Deleted")
      loadData()
    })
  }

  const ans=mydata.map((key)=>{
    return(
      <>
         <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fees}</td>
          <td width="10px"><button style={{backgroundColor:"gray",color:"white",borderRadius:"20px"}} onClick={()=>{mydel(key.id)}}>Delete</button></td>
          <td width="10px"><button style={{backgroundColor:"red",color:"white",borderRadius:"20px"}} onClick={()=>{mydel(key.id)}}>Edit</button></td>
         </tr>
      </>
    )
  })
    return(
        <>
          <h1> Update Students Record</h1>
          <Table striped bordered hover>
          <thead>
             <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
             </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>

          </Table>
        </>
    )
}
export default Update;



// string query -> ${myid}