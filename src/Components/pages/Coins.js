import React,{useEffect, useState} from "react";
import { useGlobalcontext } from '../../Context'
import Loading from "./Loading";
import axios from "axios";
import "skeleton-screen-css";
import './Coins.css'
import CoinTable from "../CoinTable";

const Coins = ()=>{
    const allCoinsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const {coinsy,loading,setLoading,setNetworkError,maingee,setMaingee} =useGlobalcontext();
    
    useEffect(()=>{
        setLoading(true)
        axios.get(allCoinsUrl).then((response)=>{
        console.log(response);

        
        
        const catcher = response.data.map(eachcoin=>{return{
            id:eachcoin.id,name:eachcoin.name,img:eachcoin.image,symbol:eachcoin.symbol,
            price:eachcoin.current_price,marketCap:eachcoin.market_cap_change_percentage_24h,
            rank:eachcoin.market_cap_rank,marketCap1:eachcoin.market_cap

        }})
        setMaingee(catcher)
        setLoading(false)
    }).catch((error)=>{
        console.log(error)
        setLoading(false)
        setNetworkError(true);

    })
    },[]);

    if(loading){
        return(
            <Loading/>
        )
    }
    
    
   

    return(
        <section className="pt-4 container">
            <CoinTable/>
        </section>
    )
}


export default Coins;

