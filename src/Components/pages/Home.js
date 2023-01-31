import React,{useState} from "react";
import { useGlobalcontext } from '../../Context'
import TrendingCoins from './Trending';
import Coins from './Coins';



const Home = () => {
    // const{loading}= useGlobalcontext()

    return(
        <section className="container">
            <TrendingCoins/>
            <Coins/>
        </section>
    )
}

export default Home