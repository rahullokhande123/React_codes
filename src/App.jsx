const App=()=>{

  const myName=(fnm, snm)=>{
    alert("My Name : " + fnm + " " + snm + " From Bhopal ")
  }
  return(
    <>
      <h1>Wellcome To Gaming World</h1>
      <button onClick={()=>{myName("Rahul", "Lokhande")}}>Click Here</button>
    </>
  )
}
export default App;
