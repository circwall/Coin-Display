import React from 'react';
import logo2 from '../../Ch.png';
// import { Progress } from 'antd';
import './WelcomeScree.css'
const WelcomeScreen = () => {
  return (
    <section className='welcomeScreenDiv'>
        <div className='container text-center'>
            <img src={logo2}/>
            {/* <div className='loading-progress'><div className='loadingComp'></div></div> */}
            <h1>CRYPTO HUNTER</h1>
        </div>
  </section>
  )
}

export default WelcomeScreen