import { useState } from "react";

const useCounter=()=>{

    const [count2,setCnt]=useState(0)

    const Increment=()=>{
        setCnt(count2 + 1)
    }

    

    return [count2,Increment,Decrement]
}
export default useCounter;