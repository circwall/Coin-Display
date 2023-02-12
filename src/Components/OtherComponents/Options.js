import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './Options.css';
import * as Icon from 'react-bootstrap-icons';


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
            name:'Defi',
            link: '/Defi'
        },
        {
            name:'Coins',
            link:'/Coins'
        }
    ]
  return (
    <section className=' options' >
        <div className='text-center p-2'> 
        {options.map(links=>{return(
            <Link key={links.name} className='mx-3' to={links.link}>{links.name}</Link>
        )})}
        <span className='text-success'><a href='#footer'><Icon.ArrowDown className='spanIcons '/></a><a href='#home'><Icon.ArrowUp className=' spanIcons'/></a></span>
        </div>
    </section>
  )
}

export default Options