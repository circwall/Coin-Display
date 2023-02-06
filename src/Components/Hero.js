import React from 'react';
import Btc from '../images/btc.png';
import Eth from '../images/eth.png';
import usd from '../images/usd.png';
import './Hero.css';

const Hero = () => {
    const imagei =[Btc,Eth,usd]
    const images =[
        {
            name: 'Bitcoin',
            thumb : Btc,
        },
        {
            name : 'Etherium',
            thumb : Eth,
        },
        {
            name : 'Dollar',
            thumb : usd,
        }
         ]
  return (
    <section className='herosection pt-5 mt-5'>
       <div className='heroDiv '>
            <div className='imageDiv text-center'>
                <img className='img1 pb-4' src={Btc}/>
                <img className='img2' src={Eth}/>
                <img className='img3' src={usd}/>
            </div>
       </div>
    </section>
  )
}

export default Hero;