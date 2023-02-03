import React,{useEffect, useState} from "react";
import { useGlobalcontext } from '../../Context'
import Loading from "./Loading";
import axios from "axios";
import CurrencyDude from "../CurrencyFormat"
import * as Icon from 'react-bootstrap-icons';
import ErrorPagee from "./ErrorPagee";
import Table from 'react-bootstrap/Table';
import "skeleton-screen-css";
import './Coins.css'

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
             {!maingee && <ErrorPagee/>}
            <Table className="table p-0"  hover variant="" responsive>
                {maingee &&
                    <thead>
                        <tr className="">
                            <th className="p-3">#</th>
                            <th className="p-3">coin</th>
                            <th className="p-3">name</th>
                            <th className="p-3">price</th>
                            <th>mkt Cap</th>
                            <th>24h </th>
                        </tr>
                    </thead>
                }
                {maingee.map((singleCoin) => {
                return (
                    <tbody>
                        <tr className="tr" id='tro' key={singleCoin.id}>
                            <td className="p-3" key={singleCoin.rank}>{singleCoin.rank}</td>
                            <td className="p-3 coiname" key={singleCoin.img}><img src={singleCoin.img} style={{width:'40px'}}/><span className=''>{singleCoin.symbol}</span></td>
                            <td className="p-3" key={singleCoin.name}>{singleCoin.name}</td>
                            {/* <td className="p-3">{singleCoin.name}</td> */}
                            <td className="p-3" key={singleCoin.price}>{CurrencyDude(singleCoin.price)}</td>
                            <td className="p-3" key={singleCoin.marketcap1}>{CurrencyDude(singleCoin.marketCap1)}</td>

                            <td key={singleCoin.marketCap} className={singleCoin.marketCap < 0 ? 'text-light bg-danger p-1' : ' text-light bg-success p-0'} 
                            style={{width:'120px', border:'3px solid white'}}>
                            {singleCoin.marketCap < 0? <span key='icon.arrowdown'><Icon.ArrowDownRight/></span>:<span><Icon.ArrowUpRight/></span>}
                            {singleCoin.marketCap >= 0 ? '+' + singleCoin.marketCap + '%' :singleCoin.marketCap + '%'}</td>
                        </tr>
                    </tbody>
                )
                })}

            </Table>
        </section>
    )
}


export default Coins;

