import { useContext, useState } from "react";
import { mylogContext } from "./LoginContext";

const Login=()=>{
    const {login}=useContext(mylogContext)
    const [nm,setNM]=useState("");

    return(
        <>
        {/* <h1>Wellcome {user.name</h1> */}
        Enter Name <input type="text" value={nm} onChange={(e)=>{setNM(e.target.value)}} />
        <button onClick={()=>{login(nm)}}>Login</button>
        </>
    )
}
export default Login;