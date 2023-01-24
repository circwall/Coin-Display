import React,{useEffect, useState} from "react";
import { useGlobalcontext } from '../Context'
import ReactTable from "react-table";  
import axios from "axios";
import CurrencyDude from "./CurrencyFormat";
import * as Icon from 'react-bootstrap-icons';

const Coins = ()=>{
    const allCoinsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const {coinsy,loading,setLoading,setNetworkError} =useGlobalcontext();
    const [maingee,setMaingee] = useState([]);
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
        setNetworkError(true)
            return(
                <div>
                    please Check Network Connection
                </div>
            )

    })
    },[]);
    if(loading){
        return(
            <section className='loading-section container text-center pt-4'>
                <div className='pt-5 content'><h4>Loading... <div className="spinner-border"></div></h4></div>
            </section>
        )
    }
    
    
   

    return(
        <section className="mt-5 pt-4 container">
             
            <table className="table p-0">
                <tr className="table-head">
                    <th className="p-3">#</th>
                    <th className="p-3">coin</th>
                    <th className="p-3">name</th>
                    <th className="p-3">price</th>
                    <th>mkt Cap</th>
                    <th>24h </th>

                </tr>
                {maingee.map((singleCoin) => {
                return (
                    
                    <tr className="tr" key={singleCoin.id}>
                        <td className="p-3">{singleCoin.rank}</td>
                        <td className="p-3 coiname"><img src={singleCoin.img} style={{width:'40px'}}/><span className=''>{singleCoin.symbol}</span></td>
                        <td className="p-3">{singleCoin.name}</td>
                        {/* <td className="p-3">{singleCoin.name}</td> */}
                        <td className="p-3">{CurrencyDude(singleCoin.price)}</td>
                        <td className="p-3">{CurrencyDude(singleCoin.marketCap1)}</td>

                        <td className={singleCoin.marketCap < 0 ? 'text-light bg-danger p-1' : ' text-light bg-success p-0'} 
                        style={{width:'120px', border:'3px solid white'}}>
                        {singleCoin.marketCap < 0? <span><Icon.ArrowDownRight/></span>:<span><Icon.ArrowUpRight/></span>}
                        {singleCoin.marketCap >= 0 ? '+' + singleCoin.marketCap + '%' :singleCoin.marketCap + '%'}</td>
                    </tr>
                )
                })}

            </table>

        </section>
    )
}


export default Coins