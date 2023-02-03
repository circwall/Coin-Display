import React,{useEffect, useState} from "react";
import logo2 from '../../Ch.png';
import './WelcomeScree.css';
import LoaderBar from "../LoaderBar";
const WelcomeScreen = () => {


  return (
    <section className='welcomeScreenDiv'>
        <div className='container text-center'>
            <img src={logo2}/>
            {/* <div className='loading-progress'><div className='loadingComp'></div></div> */}
            <h1>CRYPTO HUNTER</h1>
            <LoaderBar/>
        </div>
  </section>
  )
}

export default WelcomeScreen