import { Container,Row, Col } from "react-bootstrap";
const App=()=>{
 return(
  <>
    <Container className="text-center border p-5 m-5">
      <Row>
        <Col className="border bg-danger p-5 text-white">
        <h1>Wellcome to Cybrom!!!</h1>
        </Col>
        <Col className="border bg-success p-5 text-white fs-6 ">
        <h1>Hello to Cybrom!!!</h1>
        </Col>
      </Row>
    </Container>
  </>
 )
}
export default App;
