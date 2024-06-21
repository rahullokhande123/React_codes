import Employee from "./Employee";
const myans=Employee.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.salary}</td>
      <td>{key.city}</td>
    </tr>
    </>
  )
})
const App=()=>{
  return(
    <>
     <h1 align="center">Welcome to cybrom </h1>
    <table align="center" border="1" width="500" bgcolor="lightblue">
      <tr bgcolor="grey">
      <th>Employee No</th>
      <th>Name</th>
      <th>Salary</th>
      <th>City</th>
      </tr>
      {myans}
    </table>
    </>
  )
}
export default App;
