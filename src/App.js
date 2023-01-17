import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalcontext } from './Context'
import Coins from './Components/Coins';
function App() {

  const {coinsy} = useGlobalcontext();


  return (
    <section>
      <Coins/>
    </section>
  );
}

export default App;
