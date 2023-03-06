import{ React,useState, useEffect }from 'react';
import axios from 'axios';
import { useGlobalcontext } from '../../../Context';
import Loading from '../../pages/Loading';
// import { Table } from 'react-bootstrap-icons';
import './Nttfs.css';
import Table from 'react-bootstrap/Table';
const Nft = () => {
    const nfrUrl ='https://api.coingecko.com/api/v3/nfts/list';
    const [Nfts, setNfts] = useState([]);
    const {setLoading,loading,setNetworkError} = useGlobalcontext();

     useEffect(()=>{
        setLoading(true)
       axios.get(nfrUrl).then(response=>{
        console.log(response.data);
        const nfts = response.data.map(groupNtf=> {return{
            name:groupNtf.name, id:groupNtf.id, assetPlat:groupNtf.asset_platform_id,
            Symbol:groupNtf.symbol, adress:groupNtf.contract_address
        }})
        setNfts(nfts)
        setLoading(false)
       }).catch((error)=>{
        console.log(error)
        setLoading(false)
        setNetworkError(true);
       }) }
       
       ,[])
    if(loading){
    return(
        <Loading/>
    )
    }
  return (
    <section className='pt-5 mt-5 text-dark container'><h1>Nfts</h1>
        <Table responsive hover className='table-text text-center'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>symbol</th>
                    <th>asset platform</th>
                    <th>contract address</th>
                </tr>
            </thead>
            {Nfts.map(eachNft=>{return(
            <tbody >
                <tr>
                    <td key={eachNft.name} className='text-left'>
                        {eachNft.name}
                    </td >
                    <td className='text-left' key={eachNft.assetPlat}>{eachNft.Symbol}</td>
                    <td key={eachNft.assetPlat}>{eachNft.assetPlat}</td>
                    <td key={eachNft.adress}>{eachNft.adress}</td>
                </tr>
            </tbody>
        )})}
        </Table>
        
    </section>
  )
}

export default Nft