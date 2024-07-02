const App=()=>{

  const myName=(nm)=>{
    alert("My Name : " + nm + " From Bhopal ")
  }
  return(
    <>
      <h1>Wellcome To Gaming World</h1>
      <button onClick={()=>{myName("Rahul Lokhande")}}>Click Here</button>
    </>
  )
}
export default App;
