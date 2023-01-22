import React,{useEffect, useState} from "react";
import { useGlobalcontext } from '../Context'
import ReactTable from "react-table";  
import axios from "axios";
import CurrencyDude from "./CurrencyFormat";
import * as Icon from 'react-bootstrap-icons';

const Coins = ()=>{
    const {coinsy,loading} =useGlobalcontext();
    const [maingee,setMaingee] = useState([]);
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=false').then((response)=>{
        console.log(response);

        
        
        const catcher = response.data.map(eachcoin=>{return{
            id:eachcoin.id,name:eachcoin.name,img:eachcoin.image,symbol:eachcoin.symbol,
            price:eachcoin.current_price,marketCap:eachcoin.market_cap_change_percentage_24h,
            rank:eachcoin.market_cap_rank,

        }})
        setMaingee(catcher)
    }).catch((error)=>{
        console.log(error)

            return(
                <div>
                    please Check Network Connection
                </div>
            )

    })
    },[coinsy])
    
    
   

    return(
        <section className="pt-4 container">
             
            <table className="table p-0">
                <tr className="table-head">
                    <th className="p-3">#</th>
                    <th className="p-3">coin</th>
                    <th className="p-3">name</th>
                    <th className="p-3">price</th>
                    <th>market Cap 24hrs <Icon.Arrow90degRight/></th>

                </tr>
                {maingee.map((singleCoin) => {
                return (
                    
                    <tr className="tr" key={singleCoin.id}>
                        <td className="p-3">{singleCoin.rank}</td>
                        <td className="p-3"><img src={singleCoin.img} style={{width:'40px'}}/>{singleCoin.symbol}</td>
                        <td className="p-3">{singleCoin.name}</td>
                        <td className="p-3">{CurrencyDude(singleCoin.price)}</td>
                        <td className={singleCoin.marketCap < 0 ? 'text-light bg-danger ' : ' text-light bg-success'} 
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