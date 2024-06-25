
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

//----------------------------------------------
const App=()=>{
  return(
    <>
      
      <Container>
        <Alert variant='success' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='danger' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='dark' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='info' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='primary' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='success' dismissible>
          This is a alert—check it out!
        </Alert>

      </Container>
       
   </>
  )
}
export default App;