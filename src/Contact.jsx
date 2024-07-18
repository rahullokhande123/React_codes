import { useNavigate,useParams } from "react-router-dom";

const Contact=()=>{
    const navigate=useNavigate();
    const {id}=useParams()
    setTimeout(()=>{
        navigate("/home")
    },4000);
    
    return(
        <>
        <h1>Contact Page{id}</h1>
        </>
    )
}
export default Contact;