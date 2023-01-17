import React,{Children, useContext,useEffect,useState} from "react";
import axios from 'axios'





const AppContext = React.createContext()

const trendingUrl = "https://api.coingecko.com/api/v3/search/trending";


const AppProvider =({ children })=>{
    const [coinsy, setCoins] = useState([]);

    useEffect(()=>{

    
       axios.get(trendingUrl).then((response)=>{
        const Coinsey= response.data.coins.map(coin=>{return{
            name:coin.item.name,id:coin.item.id, 
            marketCap:coin.item.market_cap_rank, 
            symbol:coin.item.symbol, price:coin.item.price_btc,
            image:coin.item.small}})
            setCoins(Coinsey)
        console.log(response)
       }).catch((error)=>{
        console.log(error)
       }) }
       ,[])
       
    // console.log(coinsy)
   


    return(
        <AppContext.Provider value={{coinsy}}>
            { children}
        </AppContext.Provider>
    )
}

export const useGlobalcontext = () =>{
    return(
        useContext(AppContext)
    )    
}

export  {AppContext, AppProvider }