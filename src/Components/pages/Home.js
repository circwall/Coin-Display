import React,{useState} from "react";
import { useGlobalcontext } from '../../Context'
import TrendingCoins from './Trending';
import Coins from './Coins';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Hero from "../Hero";
import Search from "../Search";



const Home = () => {
    // const{loading}= useGlobalcontext()
    const {networkError} = useGlobalcontext();

    return(
        <section id='home'>
            {/* {networkError && } */}
            <Hero />
            <Search/>
            <TrendingCoins/>
            <Coins/>
        </section>
    )
}

export default Home