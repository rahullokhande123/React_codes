const sub=["PHP","ORACLE","JAVA","PYTHON"];

  const mysub=sub.map((key)=>{
    return(
      <>
      <li>{key}</li>
      </>
    )
  })

const App=()=>{
  return(
    <>
     <h1>Welcome to cybrom </h1>
     <ol>
      {mysub}
     </ol>
    </>
  )
}
export default App;
