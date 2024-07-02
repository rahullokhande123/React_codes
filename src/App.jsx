const App=()=>{

  const myAdd=(x,y)=>{
    alert(x+y);
  }
  return(
    <>
      <h1>Wellcome To Gaming World</h1>
      <button onClick={()=>{myAdd(6000,4000)}}>Click Here</button>
    </>
  )
}
export default App;
