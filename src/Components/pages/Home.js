import React,{useState} from "react";
import { useGlobalcontext } from '../../Context'
import TrendingCoins from './Trending';
import Coins from './Coins';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Hero from "../Hero";



const Home = () => {
    // const{loading}= useGlobalcontext()

    return(
        <section id='home'>
            <Hero />
            <TrendingCoins/>
            <Coins/>
            <Link  className='pt-5 mt-5 Link' to='/TrendingCoins'>Trending</Link>
        </section>
    )
}

export default Home