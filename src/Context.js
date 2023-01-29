import React,{ useContext,useEffect,useState} from "react";
import axios from 'axios'





const AppContext = React.createContext()

const trendingUrl = "https://api.coingecko.com/api/v3/search/trending"


const AppProvider =({ children })=>{
    const [maingee,setMaingee] = useState([]);
    const [coinsy, setCoins] = useState([]);
    const[loading, setLoading] = useState(false)
    const [networkError, setNetworkError] = useState(false);
    const[emptyGee,setEmptyGee] = useState(false)


function checker(){
    !maingee ? setEmptyGee(true) : setEmptyGee(false)
}

    // useEffect(()=>{
    //     setLoading(true)
    //    axios.get(trendingUrl).then((response)=>{
    //     const Coinsey= response.data.coins.map(coin=>{return{
    //         name:coin.item.name,id:coin.item.id, 
    //         marketCap:coin.item.market_cap_rank, 
    //         symbol:coin.item.symbol, price:coin.item.price_btc,
    //         image:coin.item.thumb}})
    //         setCoins(Coinsey)
    //     // console.log(response)
    //     setLoading(false)
    //    }).catch((error)=>{
    //     console.log(error)
        
    //    }) }
       
    //    ,[])
       
    // // console.log(coinsy)
   


    return(
        <AppContext.Provider value={{networkError, maingee,setMaingee, setNetworkError,coinsy,loading,setCoins,setLoading,trendingUrl}}>
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