import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalcontext } from './Context'
import Coins from './Components/Coins';
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Navigation from './Components/Nav';
import ErrorPagee from './Components/pages/ErrorPagee';
function App() {

  const {loading,networkError,maingee} = useGlobalcontext();

  
  return (
    <section>
      {networkError && <ErrorPagee/>}
      <Navigation/>
      <Home/>
      <Coins/>
    </section>
  );
}

export default App;
