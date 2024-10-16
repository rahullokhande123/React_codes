import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
          <Link to="context">Address</Link>
          <Link to="cybrom">Name</Link>
          <Link to="college">Contact</Link>
          <Outlet/>
        </>
    )
}
export default Layout;