import Cybrom from "./Cybrom";
import Birthday from "./Birthday";
import { useState } from "react";
import Loader from "./Loader";

const App=()=>{
const [myvalue,setmyvalue]=useState(false);
setTimeout(()=>{
  setmyvalue(true)
},5000)

return(
  <>
  <h1>Conditional Programing</h1>
  {myvalue ? <Birthday/> : <Cybrom/>}
  </>
)
}
export default App;