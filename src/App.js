import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalcontext } from './Context'
import Coins from './Components/Coins';
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Navigation from './Components/Nav';
function App() {

  const {loading} = useGlobalcontext();

  if(loading){
    return(
        <section className='loading-section container text-center'>
            <div className='pt-5 content'><h4>Loading... <div className="spinner-border"></div></h4></div>
        </section>
    )
}
  return (
    <section>
      <Navigation/>
      <Home/>
      <Coins/>
    </section>
  );
}

export default App;
