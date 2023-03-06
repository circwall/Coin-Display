import React,{useEffect, useState} from "react";
import { Progress } from 'antd';
const LoaderBar = () => {
    const [perCent,setPercent] = useState(10);
    

useEffect(()=>{
  const timer  = setTimeout(() => {
    setPercent(perCent+10);
  }, 85);
},[perCent])
  return (
    <div className="text-light text-center">
        {/* <Progress percent={perCent}/> */}
        <Progress percent={perCent} steps={10} size="lg" />
    </div>
  )
}

export default LoaderBar