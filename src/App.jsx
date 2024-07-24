


//=====================================================

import AuthUser from "./AuthUser";
import UnauthUser from "./UnauthUser";
import { useContext } from "react";
import { myloginContext } from "./LoginContext";


const App=()=>{
  
  const {user}=useContext(myloginContext);

  return(
     <>
      <h1>My Login</h1>
      {user.auth ? <AuthUser/> : <UnauthUser/>}
     </>
  )
}
export default App;