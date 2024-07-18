import { useNavigate } from "react-router-dom";

const Contact=()=>{
    const navigate=useNavigate();
    setTimeout(()=>{
        navigate("/home")
    },4000);
    
    return(
        <>
        <h1>Contact Page</h1>
        </>
    )
}
export default Contact;