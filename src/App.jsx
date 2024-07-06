import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import Table from 'react-bootstrap/Table';

import { Container } from "react-bootstrap";


const App=()=>{
  
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
    let url="https://jsonplaceholder.typicode.com/todos";
    axios.get(url).then((res)=>{
      setMydata(res.data)
      console.log(res.data);
    });
  }
  useEffect(()=>{
    loadData();
  },[]);

  let status="";
  const ans=mydata.map((key)=>{
    if(key.completed==true){
      status="True";
    }
    else{
      status="Fauls";
    }
    return(
      <>
      <tr>
        <td>{key.userId}</td>
        <td>{key.id}</td>
        <td>{key.title}</td>
        <td>{status}</td>
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
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
        {ans}
        </thead>
      </Table>
      </Container>
    </>
  )
}
export default App;