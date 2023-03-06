import React from 'react';
import './Footer.css';
import logo from '../images/Ch.png';
import Resource from './Resource';
import About from './About';
import Contact from './Contact';
import Message from './OtherComponents/Message';

const Footer = () => {
  return (
    <footer id='footer' className='py-5' >
      <div className='container'>
          <div className='logoSie text-light container'>
            <img src={logo} />
            <h1>CoinHunter</h1>
          </div>
          <hr className='text-light '/>
        <div className='footerDiv '>
          <div className='divleft text-light'>
            <About/>
          </div>
          <div className='middleDiv'>
            <Resource/>
          </div>
          <div className='rightDiv'>
            <Message/>
          </div>
        </div>
        <Contact/>
      </div>
    </footer>
  )
}

export default Footer