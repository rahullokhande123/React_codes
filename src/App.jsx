const App=()=>{
  return(
    // <>
    // <div style={{backgroundColor:"pink",border:"1", borderRadius:"10", width:"300px",hight:"300px"}}>
    //   <div style={{backgroundColor:"red",border:"1", borderRadius:"10", width:"100px",hight:"100px",position:"relative",top:"20px",left:"20px"}}></div>
    // </div>
    // </>
    <>
    <div style={{backgroundColor:"red", width:"400px",height:"400px",borderRadius:"20px"}}>
      <div style={{backgroundColor:"grey",width:"300px", height:"300px",borderRadius:"20px",position:"relative", left:"45px",top:"45px"}}>
        <div style={{backgroundColor:"yellow",width:"200px",height:"200px",borderRadius:"20px",position:"relative",left:"50px",top:"50px"}}>
             <div style={{backgroundColor:"blue",width:"150px",height:"150px",borderRadius:"20px",position:"relative",left:"25px",top:"25px"}}></div>
        </div>
      </div>
    </div>
    </>
  )
}
export default App;