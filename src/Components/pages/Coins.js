import React,{useEffect, useState} from "react";
import { useGlobalcontext } from '../../Context'
import Loading from "./Loading";
import axios from "axios";
import "skeleton-screen-css";
import './Coins.css'
import CoinTable from "../CoinTable";
import Pagination from 'react-bootstrap/Pagination';
import CoinTable2 from "../CoinTable2";
import PageItem from 'react-bootstrap/PageItem';

const Coins = ()=>{
    const allCoinsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const {coinsy,networkError,loading,setLoading,setNetworkError,maingee,setMaingee} =useGlobalcontext();
    const[pagey,setPagey]= useState(false)
    const handleer = () =>{
        setPagey(true)
    }
    useEffect(()=>{
        setLoading(true)
        axios.get(allCoinsUrl).then((response)=>{
        console.log(response);

        
        
        const catcher = response.data.map(eachcoin=>{return{
            id:eachcoin.id,name:eachcoin.name,img:eachcoin.image,symbol:eachcoin.symbol,
            price:eachcoin.current_price,marketCap:eachcoin.market_cap_change_percentage_24h,
            rank:eachcoin.market_cap_rank,marketCap1:eachcoin.market_cap,
            maxSupply:eachcoin.circulating_supply
            , totalVolume:eachcoin.total_volume,low24:eachcoin.low_24h,
            high24:eachcoin.high_24h

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
        <section className="pt-4 ">
            {!pagey&&<CoinTable/>}
            {pagey&&<CoinTable2/>}    
            {!networkError && <div className="text-center">
                {!pagey && <div><button onClick={(()=>setPagey(true))} className="btn-primary text-center">next</button> 
                    <button  className="btn-primary text-center">1</button>  </div>}
                {pagey && 
                <div>
                    <button  className="btn-primary text-center">2</button>  
                    <button onClick={(()=>setPagey(false))}className="btn-primary text-center">back</button>  
                </div>}

            </div>  }
    </section>
    )
}


export default Coins;

