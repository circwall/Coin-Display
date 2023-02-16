import React,{useEffect, useState} from "react";
import { useGlobalcontext } from "../../Context";
import Loading from "./Loading";
import ReactTable from "react-table";  
import axios from "axios";
import CurrencyDude from "../CurrencyFormat";
import * as Icon from 'react-bootstrap-icons';
import './Trending.css';
import Table from 'react-bootstrap/Table';





const TrendingCoins = () =>{

    const {trendingUrl,setLoading,coinsy,setCoins,loading,setNetworkError} = useGlobalcontext();

    useEffect(()=>{
        setLoading(true)
       axios.get(trendingUrl).then(response=>{
        console.log(response);
        const Coinsey= response.data.coins.map(coin=>{return{
            name:coin.item.name,id:coin.item.id, 
            marketCap:coin.item.market_cap_rank, 
            symbol:coin.item.symbol, price:coin.item.price_btc,
            image:coin.item.thumb,lgim:coin.item.large}})
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
        <section className=" trending p-5 my-5 ">
            <h1 className="text-center " >Trending <Icon.Fire className="text-danger fire"/></h1>
            <h3 className="text-center ">Top 7 Searched Coins </h3>
            <Table  hover variant="" responsive className="">
            <thead>
               <tr>
                    <th>#</th>
                    <th>coin</th>
                    <th>name</th>
                    <th>price (Btc)</th>
                    {/* <th>price(USD)</th> */}
               </tr>
            </thead>
                {coinsy.map(trendCoin=>{return(
                    <tbody >
                        <tr key={trendCoin.name} title={trendCoin.name}>
                            <td key={trendCoin.marketCap}>
                                {trendCoin.marketCap}
                            </td>
                            <td key={trendCoin.image}><img src={trendCoin.image}/><div className="">{trendCoin.symbol}</div></td>
                            <td key={trendCoin.symbol}>{trendCoin.name}</td>
                            <td key={trendCoin.price}>{trendCoin.price.toFixed(16)}</td>
                        </tr>                        
                    </tbody>
                )})}
            </Table>

        </section>
    )
}

export default TrendingCoins;