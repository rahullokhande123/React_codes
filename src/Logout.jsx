import { useContext } from "react";
import { mylogContext } from "./LoginContext";

const Logout=()=>{

    const {logout,user}=useContext(mylogContext);

    return(
        <>
          <h1>Wellcome {user.name}</h1>
          <button onClick={()=>{logout()}}>Logout</button>    
        </>
    )
}
export default Logout;