// import axios from "axios";
// import {React,useEffect,useState} from 'react';
// import { useGlobalcontext } from "../../Context";
// function Converter(coin){
// const allCoinsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

//     const {coinsy,loading,setLoading,setNetworkError,maingee,setMaingee} =useGlobalcontext();
//     const [price,setPrice] =useState([]);
//     const [tPrice, setThePrice] =useState()
//     let bvc =[]
//     useEffect(()=>{
//         axios.get(allCoinsUrl).then((response)=>{   
        
//         const catcher = response.data.map(eachcoin=>{return{
//             id:eachcoin.id,name:eachcoin.name,img:eachcoin.image,symbol:eachcoin.symbol,
//             pric:eachcoin.current_price,marketCap:eachcoin.market_cap_change_percentage_24h,
//             rank:eachcoin.market_cap_rank,marketCap1:eachcoin.market_cap

//         }})
//         setPrice(catcher)
//         setLoading(false)
//     }).catch((error)=>{
//         console.log(error)
    

//     })
  

//     },[]);

//     let btc = price.filter(prices=> prices.symbol === 'btc')
//     bvc.push(btc)
//     let thePrice = bvc.filter(bitc=>bitc.pric)
//     setThePrice(thePrice)
   
//     console.log(price)

//     console.log(btcPrice)

//     function calcu (){
//         bvc.map(prop=>{
//             console.log(prop.pric)
//         })
//         calcu()
//     // return activeCoin * btcPrice
//     }

// return(
//     <div></div>
// )
// }
// export default Converter