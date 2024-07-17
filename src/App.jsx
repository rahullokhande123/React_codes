import { useRef,useEffect,useState} from "react";

const App =()=>{
  const [mydata,setMydata]=useState("");
  const myref=useRef(0);
  const textref=useRef(0);

  useEffect(()=>{
    myref.current=myref.current+1
  })

  const display=()=>{
    textref.current.style.backgroundColor="skyblue";
  }

  return(
    <>
       <h1>Wellcome To Cybrom</h1>
       <textarea value={mydata} ref={textref} onChange={(e)=>{setMydata(e.target.value)}} />
        <h1>Total Count : {myref.current}</h1>
        <button onClick={display}>Click</button>    
    </>
  )
}
export default App;