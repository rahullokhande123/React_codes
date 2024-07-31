import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./toDoSlice";


const App=()=>{
    const [val,setVal]=useState("");
    const mytask=useSelector((state)=>state.todolist.task);
    const mydis=useDispatch();

    const taskAdd=()=>{
       mydis(addTask({id: Date.now(), task:val}))
       setVal("");
    }
    let sno=0
    

    const ans = mytask.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.task}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>To Do App </h1>
        Enter <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
        <button onClick={taskAdd}>Add</button>
        <hr size="4" color="blue" />
        
            <tr>
                <th>S no.</th> 
                <th>Task</th>
            </tr>
            {ans}
        
        </>
    )
}
export default App;