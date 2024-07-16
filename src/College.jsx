import Cybrom from "./Cybrom";
import Bhopal from "./Bhopal";

const College=(props)=>{
    if (props.myVal){
        return(
            <>
               <Bhopal/>
            </>
        )
    }
    else{
        return(
            <>
            <Cybrom/>
            </>
        )
    }
  }
  export default College;
