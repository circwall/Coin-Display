import React,{useState} from "react";
import { useGlobalcontext } from '../Context'
import ReactTable from "react-table";  
import axios from "axios";

const Coins = ()=>{
    const {coinsy,loading} =useGlobalcontext();
    const [maingee,setMaingee] = useState([])
    if(loading){
        return(
            <section className='section'>
                <h4>Loading... <div className="spinner-border"></div></h4>
            </section>
        )
    }
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then((response)=>{
        console.log(response);
        
        const catcher = response.data.map(eachcoin=>{return{
            id:eachcoin.id,name:eachcoin.name,img:eachcoin.image,symbol:eachcoin.symbol,
            price:eachcoin.current_price,marketCap:eachcoin.market_cap_change_24h

        }})
        setMaingee(catcher)
    }).catch((error)=>{
        console.log(error)
    })

    return(
        <section className="pt-4 container">
             
            <table className="table p-2">
                <tr className="table-head">
                    <th className="p-3">#</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">price</th>
                </tr>
                {maingee.map((singleCoin) => {
                return (
                    
                    <tr className="p-3" key={singleCoin.id}>
                        <td className="p-3"><img src={singleCoin.img} style={{width:'40px'}}/><span>({singleCoin.symbol})</span></td>
                        <td className="p-3">{singleCoin.name}</td>
                        <td className="p-3">{singleCoin.price}</td>
                    </tr>
                )
                })}

            </table>

        </section>
    )
}


export default Coins