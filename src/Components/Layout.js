import React from 'react'
import Navigation from "../Components/Nav"
import RouterP from "../Components/Router";
import { useGlobalcontext } from '../Context';
import Footer from './Footer';
import ErrorPagee from './pages/ErrorPagee';



const Layout = () => {
    const {networkError} = useGlobalcontext();
  return (
    <div>
        <Navigation />
        <RouterP />
        {networkError && <ErrorPagee/>}
        <Footer/>
    </div>
  )
}

export default Layout