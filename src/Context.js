import React,{Children, useContext,useEffect,useState} from "react";
import axios from 'axios'





const AppContext = React.createContext()

const trendingUrl = "https://api.coingecko.com/api/v3/search/trending"


const AppProvider =({ children })=>{
    const [coinsy, setCoins] = useState([]);
    const[loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
       axios.get(trendingUrl).then((response)=>{
        const Coinsey= response.data.coins.map(coin=>{return{
            name:coin.item.name,id:coin.item.id, 
            marketCap:coin.item.market_cap_rank, 
            symbol:coin.item.symbol, price:coin.item.price_btc,
            image:coin.item.thumb}})
            setCoins(Coinsey)
        console.log(response)
        setLoading(false)
       }).catch((error)=>{
        console.log(error)
        return(
            <div>foolish nework</div>
        )
       }) }
       
       ,[])
       
    // console.log(coinsy)
   


    return(
        <AppContext.Provider value={{coinsy,loading}}>
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