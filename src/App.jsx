import Login from "./Login";
import Logout from "./Logout";
import { useContext } from "react";
import { mylogContext } from "./LoginContext";

const App=()=>{

  const {user}=useContext(mylogContext);
  return(

    <>
    {user.auth ? <Logout/> : <Login/> }
   
    </>
  )
}
export default App;