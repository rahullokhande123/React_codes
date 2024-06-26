import { Container,Row, Col } from "react-bootstrap";
const App=()=>{
 return(
  <>
    <Container fluid className="text-center border p-5">  
      {/* fluid -> ka use hm container ke sath krte h bada container lene ke liye */}
      <Row>
        <Col className="border bg-info p-5 text-white">
        <h1>Wellcome to Cybrom!!!</h1>
        </Col>
        <Col className="border bg-success p-5 text-white fs-6 ">
        <h1>Hello to Cybrom!!!</h1>
        </Col>
        <Col className="border bg-primary p-5 text-white">
            <h1>I am Devloper</h1>
        </Col>
      </Row>
    </Container>
  </>
 )
}
export default App;
