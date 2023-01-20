import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalcontext } from './Context'
import Coins from './Components/Coins';
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Nav from './Components/Nav';
function App() {

  const {coinsy} = useGlobalcontext();


  return (
    <section>
      
      <Home/>
      <Coins/>
    </section>
  );
}

export default App;
