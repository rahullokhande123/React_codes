import { useNavigate } from "react-router-dom";
const About=()=>{
     const navigate=useNavigate();
     const Change=()=>{
        navigate("/contact")
     }
    return(

        <>
        <h1>About Page </h1>
        <button onClick={Change}>Click</button>
        </>
    )
}
export default About;