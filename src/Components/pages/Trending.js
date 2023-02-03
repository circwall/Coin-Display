import React,{useEffect, useState} from "react";
import { useGlobalcontext } from "../../Context";
import Loading from "./Loading";
import ReactTable from "react-table";  
import axios from "axios";
import CurrencyDude from "../CurrencyFormat";
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import './Trending.css'

// import Coins from "./Coins";


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
        console.log(response.data)
        setLoading(false)
       }).catch((error)=>{
        console.log(error)
        setLoading(false)
        setNetworkError(true);
       }) }
       
       ,[])
       if(loading){
        return(
            <Loading/>
        )
    }

    return(
        <section className="container trending p-3 ">
            <h1 >Trending <Icon.Fire className="text-danger"/></h1>
            <div className="trendList text-center" >
                {coinsy.map(singTrend=> {return(
                    <div className="singletrend" key={singTrend.id}>
                        <Button className='bg-success btnG'>{singTrend.name} <span><img src={singTrend.image}/></span></Button>
                        
                    </div>
                )})}
            </div>
        </section>
    )
}

export default TrendingCoins;