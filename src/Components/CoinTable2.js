import React,{useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import { useGlobalcontext } from "../Context";
import CurrencyDude from "./CurrencyFormat";
import * as Icon from 'react-bootstrap-icons';



const CoinTable2 = () => {
    const {maingee} =useGlobalcontext();

  return (
    <Table className="table p-0"  hover variant="" responsive>
                {maingee &&
                    <thead>
                        <tr className="">
                            <th className="p- text-left">#</th>
                            <th className="p- text-left">coin</th>
                            <th className="p- text-left">name</th>
                            <th className="p- text-left">price</th>
                            <th className="p- text-left">mkt Cap</th>
                            <th className="p- text-left">circulating supply</th>
                            <th className="p- text-left">total volume</th>
                            <th className="p- text-left">high 24h </th>
                            <th className="p- text-left">low 24h </th>
                            <th className="p- text-left">24h </th>

                        </tr>
                    </thead>
                }
                {maingee.filter((singleCoin)=>singleCoin.rank >=51) .map((singleCoin) => {
                return (
                    <tbody key={singleCoin.id}>
                        <tr className="tr" id='tro' >
                            <td className="p- text-left" key={singleCoin.rank}>{singleCoin.rank}</td>
                            <td className="p- text-left coiname" key={singleCoin.img}><img src={singleCoin.img} style={{width:'40px'}}/><span className="px-2">{singleCoin.symbol}</span></td>
                            <td className="p- text-left" key={singleCoin.name}>{singleCoin.name}</td>
                            {/* <td className="p-3">{singleCoin.name}</td> */}
                            <td className="p- text-left" key={singleCoin.price}>{CurrencyDude(singleCoin.price)}</td>
                            <td className="p- text-left" key={singleCoin.marketcap1}>{CurrencyDude(singleCoin.marketCap1)}</td>
                            <td className="p- text-left" key={singleCoin.maxSupply}>{CurrencyDude(singleCoin.maxSupply)}</td>
                            <td className="p- text-left"  key={singleCoin.totalVolume}>{CurrencyDude(singleCoin.totalVolume)}</td>
                            <td className="text-left">{CurrencyDude(singleCoin.high24)}</td>
                            <td className="text-left"> {CurrencyDude(singleCoin.low24)}</td>
                            <td key={singleCoin.marketCap} className={singleCoin.marketCap < 0 ? 'text-light bg-danger p-' :
                             ' text-light bg-success p-0 '} 
                                style={{width:'120px', border:'3px solid white'}}>
                                {singleCoin.marketCap < 0? <span key='icon.arrowdown'><Icon.ArrowDownRight/></span>:
                                <span><Icon.ArrowUpRight/></span>}
                                {singleCoin.marketCap >= 0 ? '+' + singleCoin.marketCap + '%' :singleCoin.marketCap + '%'}
                            </td>
                        </tr>
                    </tbody>
                ) 
                })}
            </Table>
  )
}

export default CoinTable2