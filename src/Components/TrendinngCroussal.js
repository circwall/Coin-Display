import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useGlobalcontext } from '../Context';
import Button from 'react-bootstrap/Button';


const TrendinngCroussal = () => {
    const {trendingUrl,setLoading,coinsy,setCoins,loading,setNetworkError} = useGlobalcontext();

  return (
    <Carousel fade>
      
      {coinsy.map(singTrend=> {return(
            <Carousel.Item key={singTrend.id}>
                <div className="singletrend text-light pb-3" key={singTrend.symbol}>
                    <div className='btnG text-center p-5' key={singTrend.image}><img src={singTrend.image}/></div>
                </div>
                <Carousel.Caption key={singTrend.price}>{singTrend.name} </Carousel.Caption>
            </Carousel.Item>
                )})}
      
    </Carousel>
  )
}

export default TrendinngCroussal;