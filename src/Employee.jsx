const Employee=(props)=>{
    return(
        <>
        <h1>Employee Name: {props.nm}</h1>
        <h1>Employee Number: {props.empno}</h1>
        <h1>Employee Salary:{props.sal}</h1>
        </>
    )
}
export default Employee;