import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './Options.css';


const Options = () => {
    const options=[
        {
            name:'Trending',
            link: '/TrendingCoins',
        },
        {
            name: 'Exchanges',
            link:'/Exchanges'
        },
        {
            name:'Nfts',
            link: '/Nfts'
        },
        {
            name:'Coins',
            link:'/Coins'
        }
    ]
  return (
    <section className=' options' >
        <div className='text-left p-2'> 
        <hr/>
        {options.map(links=>{return(
            <Link key={links.name} className='mx-4 text-dark Link delink' to={links.link}>{links.name}</Link>
        )})}
        <hr/>
        </div>
    </section>
  )
}

export default Options