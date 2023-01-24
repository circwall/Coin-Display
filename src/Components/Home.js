import React,{useState} from "react";
import { useGlobalcontext } from '../Context'
import TrendingCoins from './Trending';





const Home = () => {
    // const{loading}= useGlobalcontext()

    return(
        <section className="container">
           <div>
            <TrendingCoins/>
           </div>
        </section>
    )
}

export default Home