import React,{useEffect, useState} from "react";


function caller (){
    const[digit,setDigit] = useState(0)
useEffect(()=>{
    const timer = setTimeout(()=>
{
    setDigit(digit+0.000000000000001)
},100)
},[])
}

export default caller