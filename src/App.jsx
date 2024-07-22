import Bhopal from "./Bhopal"
import { myContext } from "./CourseContext"
import { useContext } from "react"

const App=()=>{

  const {course,setCourse}=useContext(myContext)
  return(
    <>
    <h1>Wellcome To Cybrom {course}</h1>
    <button onClick={()=>{setCourse("PHP")}}>Click Here</button>
    <Bhopal/>
    </>
  )
}
export default App