import React,{ useContext,useEffect,useState} from "react";
import axios from 'axios'





const AppContext = React.createContext()

const trendingUrl = "https://api.coingecko.com/api/v3/search/trending";
const global ='';

const AppProvider =({ children })=>{
    const [maingee,setMaingee] = useState([]);
    const [coinsy, setCoins] = useState([]);
    const[loading, setLoading] = useState(false)
    const [networkError, setNetworkError] = useState(false);
    const[emptyGee,setEmptyGee] = useState(false);
    const [rates,setRates]= useState('')


function checker(){
    !maingee ? setEmptyGee(true) : setEmptyGee(false)
}

   


    return(
        <AppContext.Provider value={{networkError,setRates, maingee,setMaingee, setNetworkError,coinsy,loading,setCoins,setLoading,trendingUrl}}>
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