import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {useState, React, useEffect} from "react";
import Layout from './Components/Layout';
import WelcomeScreen from './Components/pages/WelcomeScreen';
import TrendingCoins from './Components/pages/Trending';

function App() {

  const [loadin, setLoadin] = useState(false);

  useEffect(() => {
    setLoadin(true);
    const timer = setTimeout(() => {
      setLoadin(false);
    }, 1000);
    return () => clearTimeout(timer)
  }, []);

  if(loadin){
    return(
     <WelcomeScreen/>
    )
  }
  
  return (
    <section className='App'>
        <Layout/>
    </section>
  );
}

export default App;
