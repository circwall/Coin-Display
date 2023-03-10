import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './pages/Home';
import TrendingCoins from './pages/Trending';
import Coins from './pages/Coins';
import Nft from '../Components/OtherComponents/Ntf/Nft';


const RouterP = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/TrendingCoins' element={<TrendingCoins/>}></Route>
        <Route path='/Coins' element={<Coins/>}></Route>
        <Route path='/Nfts' element={<Nft/>}></Route>
    </Routes>
  )
}

export default RouterP