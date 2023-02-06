import React from 'react'
import './Footer.css'

const Resource = () => {

    const resources =[
        {
            name:'Perpetuals',
            link : 'https://www.coingecko.com/en/derivatives'
        },
        {
            name: ' Crypto News',
            link: 'https://www.coingecko.com/en/news'
        },
        {
            name: 'Bitcoin Treasury',
            link : 'https://www.coingecko.com/en/public-companies-bitcoin'
        },
        {
            name: 'Crypto Heatmap',
            link : 'https://www.coingecko.com/en/cryptocurrency-heatmap'
        },
        {
            name : 'Crypto API',
            link : 'https://www.coingecko.com/en/api'
        }
    ]
  return (
    <div>
        <ul>
            <h4 className='text-light'>Resources</h4>
            {resources.map(resource=>{
                return(
            <li key={resource.link}><a href={resource.link}>{resource.name}</a></li>
            )})};
        </ul>
    </div>
  )
}

export default Resource