import React,{useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import { useGlobalcontext } from "../Context";
import CurrencyDude from "./CurrencyFormat";
import * as Icon from 'react-bootstrap-icons';



const CoinTable = () => {
    const {maingee} =useGlobalcontext();

  return (
    <Table className="table p-0"  hover variant="" responsive>
                {maingee &&
                    <thead>
                        <tr className="">
                            <th className="p-3">#</th>
                            <th className="p-3">coin</th>
                            <th className="p-3">name</th>
                            <th className="p-3">price</th>
                            <th>mkt Cap</th>
                            <th>24h </th>
                        </tr>
                    </thead>
                }
                {maingee.map((singleCoin) => {
                return (
                    <tbody key={singleCoin.id}>
                        <tr className="tr" id='tro' >
                            <td className="p-3" key={singleCoin.rank}>{singleCoin.rank}</td>
                            <td className="p-3 coiname" key={singleCoin.img}><img src={singleCoin.img} style={{width:'40px'}}/><span className=''>{singleCoin.symbol}</span></td>
                            <td className="p-3" key={singleCoin.name}>{singleCoin.name}</td>
                            {/* <td className="p-3">{singleCoin.name}</td> */}
                            <td className="p-3" key={singleCoin.price}>{CurrencyDude(singleCoin.price)}</td>
                            <td className="p-3" key={singleCoin.marketcap1}>{CurrencyDude(singleCoin.marketCap1)}</td>

                            <td key={singleCoin.marketCap} className={singleCoin.marketCap < 0 ? 'text-light bg-danger p-1' : ' text-light bg-success p-0'} 
                            style={{width:'120px', border:'3px solid white'}}>
                            {singleCoin.marketCap < 0? <span key='icon.arrowdown'><Icon.ArrowDownRight/></span>:<span><Icon.ArrowUpRight/></span>}
                            {singleCoin.marketCap >= 0 ? '+' + singleCoin.marketCap + '%' :singleCoin.marketCap + '%'}</td>
                        </tr>
                    </tbody>
                ) 
                })}
            </Table>
  )
}

export default CoinTable