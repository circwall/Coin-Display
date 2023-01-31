import React from 'react'
import Navigation from "../Components/Nav"
import RouterP from "../Components/Router";
import { useGlobalcontext } from '../Context';
import ErrorPagee from './pages/ErrorPagee';



const Layout = () => {
    const {networkError} = useGlobalcontext();
  return (
    <div>
        <Navigation />
        {networkError && <ErrorPagee/>}
        <RouterP />
    </div>
  )
}

export default Layout