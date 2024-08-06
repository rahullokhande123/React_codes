
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { overTask, delTask, compTask } from "./toDoSlice";

const App=()=>{

    const [input,setInput]=useState("")

    const mySelector=useSelector((state)=>state.myTask.task); 
    const mydis=useDispatch();
    console.log(mySelector);

    const taskAdd=()=>{
        mydis(overTask({id: Date.now(), task:input, complete:false }))
        setInput("")
    }
    // const myDel=()=>{
    //     mydis(overDelTask({id: Date.now(), task:input}))
    // }

    const myDel=(id)=>{
        mydis(delTask(id))
    }

    const recComp=(id)=>{
        mydis(compTask(id))
    }
    
    let sno=0
    const ans=mySelector.map((key)=>{
        sno++
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.complete? key.task : <span style={{textDecoration:"line-through",color:"black"}}>{key.task}</span>}</td>
                <button onClick={()=>{myDel(key.id)}} >Delet</button>
                <button onClick={()=>{recComp(key.id)}}>Complete</button>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>TO DO List</h1>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={taskAdd}>Add</button>
        

        <hr size="10px" color="black" />
        <tr>
            <th>S No.</th>
            <th>Task</th>
        </tr>
        {ans}
        </>
    )
}
export default App;







