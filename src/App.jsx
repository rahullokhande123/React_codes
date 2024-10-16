
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4";

const name="Rahul";
const age=24;
const DOB="07/08/2000";
const city="Athner";
// =============================

const Customer={
  'nm':"Aman",
  'ag':28,
  'cit':"Bhopal",
  'pro':"I Phone 14pro"
}

// ==========================================

const my_list=["Ram, ","Syam, ","Mohan, ","Sohan, ",85,96,"Aman"];
const my_ages=[24,20,6,8,10,13];

const ageData=my_ages.map((key)=>{
  return(
    <>
    <option>{key+10}</option>
    </>
  )
})

const ans=my_list.map((key)=>{
  return(
    <>
       <td>{key}</td>
    </>
  )
})
// ===========================================

const myhead={
  color:"blue",
  fontFamily:"verdana"
}
const myhead1={
  color:"green",
  fontFamily:"arial",
  fontSize:"30px",
  textDecoration:"underline"
}

// ============================================


const App=()=>{
  return(

    <>
    <h1>App Componente</h1>
    <Page1/>
    <Page2/>
    <h2>===================================</h2>
    <b>This data Passed By Props In App To Page3</b>
    <Page3 name={name} age={age} DOB={DOB} city={city} />
    <Page4 nm={Customer.nm} ag={Customer.ag} cit={Customer.cit} pro={Customer.pro} />
    {/* ========================================================================== */}
    <h2>This data come to a list by map method</h2>
    {ans} <br />
    
    <b>Actual DAta: age=[24,20,6,8,10,13];</b> <br />
    <b>Second List Data result + by 10 </b> <br />
    Final Result : <select>{ageData}</select>
    <h2>===================================</h2>
    {/* =========================================================================== */}
    <h2>CSS Applyed By Create CSS Component </h2>

      <h1 style={myhead}>Wellcom to cybrom Bhopal!!!!</h1>
      <h1 style={myhead1}>Hellow we are cybrom student</h1>
    <h2>===================================</h2>

    <h1 className="head1">Hello Devoloper's, Wellcom to cybrom Bhopal!!!!</h1>

    </>
  )
}
export default App