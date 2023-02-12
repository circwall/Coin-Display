import React from 'react';
import Btc from '../images/btc.png';
import Eth from '../images/eth.png';
import usd from '../images/usd.png';
import './Hero.css';
import Trenders from './OtherComponents/Trenders';
import Converter from './OtherComponents/Btconverter';
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
    <section className='herosection pt-5 mt-5 pb-3'>
       <div className='heroDiv pb-4'>
            <div className='imageDiv text-center'>
                <img className='img1 pb-4' src={Btc}/>
                <img className='img2' src={Eth}/>
                <img className='img3' src={usd}/>
            </div>            
       </div>
        <Trenders/>
        <Converter/>
    </section>
  )
}

export default Hero;