import {React,useState,useEffect} from 'react';
import axios from 'axios';
import { useGlobalcontext } from '../Context';

const Search = () => {
 const [search,setSearch] = useState('');
 const searchTerm ='https://api.coingecko.com/api/v3/search?query=btc';
 useEffect(()=>{
    // setLoading(true)
   axios.get('https://api.coingecko.com/api/v3/search?query=bitcoin').then((response)=>{
    // const Coinsey= response.data.coins.map(coin=>{return{
    //     name:coin.item.name,id:coin.item.id, 
    //     marketCap:coin.item.market_cap_rank, 
    //     symbol:coin.item.symbol, price:coin.item.price_btc,
    //     image:coin.item.thumb}})
    //     setCoins(Coinsey)
    console.log(response.data)
    // setLoading(false)
   }).catch((error)=>{
    console.log(error)
    // setNetworkError(true)
    
    return(
        <div>
            please Check Network Connection
        </div>
    )
   }) }
   
   ,[])
  return (
    <section>
        <input name='searchterm' onChange={(e)=>setSearch(e.target.value)} value={name} type='text'/>
        <button type='submit' onClick={handleSummit}>Search Coin</button>
    </section>
  )
}

export default Search