
import Page3 from "./Page3";
import Page4 from "./Page4";

const Page2=(props)=>{
    // return(
    //     <>
    //     <h3>This is Page2</h3>
        if (props.myVal) {
            
            return(
                <>
                <h3>This is Page2</h3>
                <Page3/>
                </>
            )
        }
        else{
            return(
                
                <>
                <h3>This is Page2</h3>
                <Page4/>
                </>
            )
        }
    //     </>
    // )
}
export default Page2;