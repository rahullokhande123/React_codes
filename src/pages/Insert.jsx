// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import axios from 'axios';

// const Insert=()=>{

// const [input, setInput]= useState({})



// const handleInput=(e)=>{
//     let name= e.target.name;
//     let value=e.target.value;
//     setInput(values=>({...values, [name]:value}));
//     console.log(input);

// }


// const handleSubmit=(e)=>{
//     e.preventDefault();
//     let url="http://localhost:3000/Student";

//    axios.post(url, input).then((res)=>{
//     alert("Data succesfully submited!!!");
//    }).catch((err)=>{
//     console.log("Error in Inserting!!")
//    });

// }

//     return(
//         <>
//         <div className='divcenter'>
//           <h1> Insert Students Record</h1>

//           <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Rollno</Form.Label>
//         <Form.Control type="text" name="rollno" value={input.rollno}   onChange={handleInput} placeholder="Enter rollno" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" name="name" value={input.name}  onChange={handleInput} placeholder="Enter name" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>City</Form.Label>
//         <Form.Control type="text" name="city" value={input.city}  onChange={handleInput} placeholder="Enter city" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Fees </Form.Label>
//         <Form.Control type="text" name="fees" value={input.fees}  onChange={handleInput} placeholder="Enter fees" />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     </div>
//         </>
//     )
// }


// export default Insert;

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Container } from 'react-bootstrap';
// import { useState } from 'react';
// import axios from 'axios';


// const Insert=()=>{

//   const [input,setInput]=useState({})

//   const handlechange=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     setInput(values=>({...values,[name]:value}))
//   }

//   const handleclick=()=>{
//     let url="http://localhost:3000/Student";
//     axios.post(url,input).then((res)=>{
//       alert("DATA POSTED")
//       setInput({})
//     }).catch((err)=>{
//       console.log("Error",err)
//     })
//   }
//   return(
    // <>
    // <Container>
    // <h1>Insert</h1>
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Roll No</Form.Label>
    //     <Form.Control type="text" name="rollno" value={input.rollno} onChange={handlechange}  />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control type="text" name="name" value={input.name} onChange={handlechange} />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>City</Form.Label>
    //     <Form.Control type="text" name="city" value={input.city} onChange={handlechange}  />
    //   </Form.Group>
    
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Fees</Form.Label>
    //     <Form.Control type="text" name="fees" value={input.fees} onChange={handlechange} />
    //   </Form.Group>

    //   <Button variant="primary" type="submit" onClick={handleclick}>
    //     Submit
    //   </Button>
    // </Form>
    // </Container>
    // </>
//   )
// }
// export default Insert;


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const Insert=()=>{
  const [input,setInput]=useState({})

  const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value
    setInput(values=>({...values,[name]:value}))
  }

  const handleclick=()=>{
    let url="http://localhost:3000/Student";
    axios.post(url,input).then((res)=>{
      alert("DATA POSTED SUCCESSFULLY")
      setInput({});
    }).catch((err)=>{
      console.log("Error",err);
    })
  }
  return(
    
    <>
    <Container>
    <h1>Insert</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll No</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handlechange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={input.city} onChange={handlechange}  />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fees</Form.Label>
        <Form.Control type="text" name="fees" value={input.fees} onChange={handlechange} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleclick}>
        Submit
      </Button>
    </Form>
    </Container>
    </>
  
  )
}
export default Insert;