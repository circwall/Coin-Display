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
        <section className='section'>
            <h4>Loading... <div className="spinner-border"></div></h4>
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
