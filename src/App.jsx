import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import Search from "./pages/Search";
import Update from "./pages/Update";


const App=()=>{
  return(
    <>
    <BrowserRouter>
         <Routes>
             <Route>
                 <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="contact" element={<Contact/>}/>
                 <Route path="display" element={<Display/>}/>
                 <Route path="insert" element={<Insert/>}/>
                 <Route path="search" element={<Search/>}/>
                 <Route path="update" element={<Update/>}/>

                 </Route>

             </Route>
         </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;