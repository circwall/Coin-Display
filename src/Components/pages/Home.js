import React,{useState} from "react";
import { useGlobalcontext } from '../../Context'
import TrendingCoins from './Trending';
import Coins from './Coins';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
// import Hero from "../Hero";
import Search from "../Search";
import Options from "../OtherComponents/Option/Options"


const Home = () => {
    // const{loading}= useGlobalcontext()
    const {networkError} = useGlobalcontext();

    return(
        <section id='home'>
            {/* <Hero /> */}
            {/* <Search/> */}
            <Coins/>
        </section>
    )
}

export default Home