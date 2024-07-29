import { useSelector,useDispatch } from "react-redux";
import { myinc,mydic } from "./counterSlice";

const App=()=>{

    const Counter=useSelector((state)=>state.mycounter.cnt)
    const mydis=useDispatch();
    return(
        <>
        <h1>My Counter</h1>
        <button onClick={()=>{mydis(myinc())}}>Increment</button>
        <h1> {Counter} </h1>
        <button onClick={()=>{mydis(mydic())}}>Decrement</button>
        </>
    )
}
export default App;