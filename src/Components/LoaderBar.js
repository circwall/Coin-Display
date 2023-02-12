import React,{useEffect, useState} from "react";
import { Progress } from 'antd';
const LoaderBar = () => {
    const [perCent,setPercent] = useState(25);
    

useEffect(()=>{
  const timer  = setTimeout(() => {
    setPercent(perCent+25);
  }, 500);
},[perCent])
  return (
    <div className="text-light text-center">
        {/* <Progress percent={perCent}/> */}
        <Progress percent={perCent} steps={4} size="lg" />
    </div>
  )
}

export default LoaderBar