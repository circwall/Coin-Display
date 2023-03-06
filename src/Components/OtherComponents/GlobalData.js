import {React, useEffect, useState} from 'react';
import axios from 'axios';

const GlobalData = () => {
    const globalUrl ='https://api.coingecko.com/api/v3/global';
    const [globe, setGlobe] = useState();

    useEffect(()=>{
        axios.get(globalUrl).then(response =>{
            console.log(response)
            const activeCoins = response.data.data.active_cryptocurrencies;
            const MarketCapPercentageBTC =response.data.data.market_cap_percentage.btc;
            const MarketCapPercentageEth=response.data.data.market_cap_percentage.eth;
            const OgData = [
              {
                value: activeCoins,
                text : 'Total listed coins'
              },
              {
                value:MarketCapPercentageBTC,
                text: "Market Cap Btc"
              },
              {
                value:MarketCapPercentageEth,
                text:"Market Cap Eth"
              }
            ]
               setGlobe(OgData)
               console.log(globe)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

  return (
    <section>
      {/* <span>{globe}</span> */}
      <div>
      
      </div>
    </section>
  )
}

export default GlobalData