import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './pages/Home';
import TrendingCoins from './pages/Trending';


const RouterP = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/TrendingCoins' element={<TrendingCoins/>}></Route>
    </Routes>
  )
}

export default RouterP