import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



import Table from 'react-bootstrap/Table';

import { Container } from "react-bootstrap";


const App=()=>{
  
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
    let url="http://localhost:3000/Student";
               
            //  axios.get() json server se data get krne ka kam krta h

    axios.get(url).then((res)=>{
      setMydata(res.data)
      console.log(res.data);
    });
  }
  useEffect(()=>{
    loadData();
  },[]);



  const ans=mydata.map((key)=>{

    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      </>
    )
  })
  return(
    <>
    <Container>
      <h1>Welcome To Cybrom Bhopal !!!</h1>
      
      <Table striped bordered hover style={{width:"1300px"}}>
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {ans}
        </thead>
      </Table>
      </Container>
    </>
  )
}
export default App;

