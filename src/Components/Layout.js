import React from 'react'
import Navigation from "../Components/Nav"
import RouterP from "../Components/Router";
import { useGlobalcontext } from '../Context';
import Footer from './Footer';
import ErrorPagee from './pages/ErrorPagee';
import Options from './OtherComponents/Option/Options';
import GlobalData from './OtherComponents/GlobalData';
import Hero from './Hero';
import UpandDown from './OtherComponents/Upand Down';


const Layout = () => {
    const {networkError} = useGlobalcontext();
  return (
    <div>
        <Navigation />
        <Hero/>
        <Options/>
        <GlobalData/>
        <UpandDown/>
        <RouterP />
        {networkError && <ErrorPagee/>}
        <Footer/>
    </div>
  )
}

export default Layout