import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="about">About</Link>|
        <Link to="contact/-420">Contact</Link>
        <hr size="4" color="red" />
        <Outlet/>
        <hr size="4" color="red" />
        www.Rahul.com
        </>
    )
}
export default Layout;