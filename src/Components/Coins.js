import React,{useState} from "react";
import { useGlobalcontext } from '../Context'


const Coins = ()=>{
    const {coinsy} =useGlobalcontext()

    return(
        <section>
            {coinsy.map(coin=>{
    return(
        <div key={coin.id}>
        <img src={coin.image} />
        </div>
    )
    })}

        </section>
    )
}


export default Coins