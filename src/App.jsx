const App=()=>{
  const myresult=(c)=>{
        let nm= c.target.name;
        let val= c.target.value;
        let typ= c.target.type;
         alert(" Name : " + nm + " ," +"Value : "+ val + " ," + "Type : " + typ );
  }

  return(
    <>
      <h1>Wellcome To Gaming World</h1>
      <button name="MyBtn" value="Button_Value" type="A" onClick={myresult}>Click Here</button>
    </>
  )
}
export default App;