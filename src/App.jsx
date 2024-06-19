
// ================ React Components ===============

import Employee from "./Employee";
import Student from "./Student";

const nm="Sachin Mishra";
const cls="Mtech";
const fees=45000;

const App=()=>{
  return(
    <>
      <h1>
      </h1>
     {/* <Employee nm="Rahul" empno="E062" sal="50000"/> */}
     <Student nm={nm} cls={cls} stufees={fees}/>
    </>
  )
}
export default App;



