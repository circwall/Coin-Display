import{ React,useState, useEffect }from 'react';
import axios from 'axios';
import { useGlobalcontext } from '../../Context';
import Loading from '../pages/Loading';
// import { Table } from 'react-bootstrap-icons';
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
            name:groupNtf.name, id:groupNtf.id, assetPlat:groupNtf.asset_platfrom_id,
            Symbol:groupNtf.symbol
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
    <section className='pt-5 mt-5 text-dark text-center'><h1>Nfts</h1>
        <Table responsive hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            {Nfts.map(eachNft=>{return(
            <tbody>
                <tr>
                    <td>
                        {eachNft.name}
                    </td>
                    <td>{eachNft.Symbol}</td>
                </tr>
            </tbody>
        )})}
        </Table>
        
    </section>
  )
}

export default Nft