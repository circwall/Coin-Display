import React,{useEffect, useState} from "react";
import { useGlobalcontext } from '../../Context'; 
import Loading from '../pages/Loading'; 
import axios from "axios";
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import CurrencyDude from "../CurrencyFormat";
import Carousel from 'react-bootstrap/Carousel';
const Trenders = () => {
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
        <section >
            <Carousel >
                
            {coinsy.map(trend=>{return(
                
                    
                        <Carousel.Item key={trend.lgim} className='text-center trender'>
                            
                            <img className='itemImg' src={trend.lgim}/>
                            <div className="carouselCap"><Carousel.Caption>{trend.name}</Carousel.Caption></div>
                        </Carousel.Item>
                    
            )})}
            </Carousel>
        </section>
    )
}


export default Trenders