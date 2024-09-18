// import College from "./College";


// const Cybrom=()=>{

//     return(
//         <>
//            <h1> Cybrom Page</h1>
//            {/* <College/> */}
//         </>
//     )
// }
// export default Cybrom;

import { useContext } from "react";
import { myContext } from "./App";


const Cybrom=()=>{
    const {myVlaue,setMyvalue}=useContext(myContext);
    return(
        <>
        <h1>Wellcome In {myVlaue}</h1>
        </>
    )
}
export default Cybrom;