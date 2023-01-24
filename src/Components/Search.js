import {React,useState,useEffect} from 'react';
import axios from 'axios';
import { useGlobalcontext } from '../Context';

const Search = () => {
 const [search,setSearch] = useState('');
 const searchTerm ='https://api.coingecko.com/api/v3/search?query=btc';
//  const fetchSearch =(url)=>{
    axios.get(searchTerm).then((response)=>{
        // const {searchedCoin} = response;
        console.log(response) 
    }).catch((error)=>{
        console.log(error)
    })
// }
// const handleSummit = ()=>{
//     fetchSearch(url)
// }
// useEffect(()=>{
//     fetchSearch(`${searchTerm}${search}`)      
// },[handleSummit])



 
  return (
    <section>
        <input name='searchterm' onChange={(e)=>setSearch(e.target.value)} value={name} type='text'/>
        <button type='submit' onClick={handleSummit}>Search Coin</button>
    </section>
  )
}

export default Search