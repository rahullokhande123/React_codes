import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
return(
    <>
    <Link style={{padding:"10px", textDecoration:"none"}} to="home">Home</Link>
    <Link style={{padding:"10px" ,textDecoration:"none"}} to="about">About</Link>
    <Link style={{padding:"10px" , textDecoration:"none"}} to="service">Service</Link>
    <Link style={{padding:"10px" , textDecoration:"none"}} to="contact">Contact</Link>
     <hr size="5" color="red" />
     <Outlet/>
      <hr size="5" color="red" />
      <a style={{textDecoration:"none"}} href="#">www.mycompany.com all recored.</a>
    </>
)
}
export default Layout;
