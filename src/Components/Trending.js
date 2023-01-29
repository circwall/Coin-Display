import React,{useEffect, useState} from "react";
import { useGlobalcontext } from '../Context'
import ReactTable from "react-table";  
import axios from "axios";
import CurrencyDude from "./CurrencyFormat";
import * as Icon from 'react-bootstrap-icons';
import Coins from "./Coins";


const TrendingCoins = () =>{

    const {trendingUrl,setLoading,coinsy,setCoins,loading,setNetworkError} = useGlobalcontext();

    useEffect(()=>{
        setLoading(true)
       axios.get(trendingUrl).then((response)=>{
        const Coinsey= response.data.coins.map(coin=>{return{
            name:coin.item.name,id:coin.item.id, 
            marketCap:coin.item.market_cap_rank, 
            symbol:coin.item.symbol, price:coin.item.price_btc,
            image:coin.item.thumb}})
            setCoins(Coinsey)
        console.log(coinsy)
        setLoading(false)
       }).catch((error)=>{
        console.log(error)
        setLoading(false)
        setNetworkError(true);
       }) }
       
       ,[])
       if(loading){
        return(
            <section className='loading-section container text-center pt-4 mt-3'>
                <div className=' content'><h4>Loading... <div className="spinner-grow"></div></h4></div>
            </section>
        )
    }

    return(
        <section className="container pt-5 trending mt-5">
            {coinsy.map(singTrend=> {return(
                <table className="singletrend" key={singTrend.id}>
                    {singTrend.name}
                </table>
            )})}
        </section>
    )
}

export default TrendingCoins;