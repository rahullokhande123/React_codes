const App=()=>{
  const display=(nm, c)=>{
         alert(nm+ " Event Type : " + c.type );
  }

  return(
    <>
      <h1>Wellcome To Gaming World</h1>
      <button onClick={(e)=>{display("Rahul ", e)}} >Click Here</button>
    </>
  )
}
export default App;
