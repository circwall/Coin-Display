import {React, useEffect, useState} from 'react';
import axios from 'axios';

const GlobalData = () => {
    const globalUrl ='https://api.coingecko.com/api/v3/global';
    const [globe, setGlobe] = useState([])
    useEffect((){
        axios.get(globalUrl).then(response =>{
            console.log(response)
            const globy = response
        }).catch(error){
            console.log(error)
        }
    },[])
  return (
    <div>GlobalData</div>
  )
}

export default GlobalData