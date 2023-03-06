import React from 'react';
import { useGlobalcontext } from '../../Context';
import * as Icon from 'react-bootstrap-icons';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './ErroPage.css'
const ErrorPagee = () => {
    const {empty}= useGlobalcontext()
  return (
    <section className='mb-5 container'>
        <div className='errosect pt- text-center text-dark'>
            <Icon.Plug className='plug'/>
            <h1 className='text-dark pt-5 mt-5'>PLEASE CHECK INTERNET CONNECTION <span className='text-danger'><Icon.InfoCircleFill/></span></h1>
            <Icon.WifiOff className='wifi'/>
        </div>
    </section>
  )
}

export default ErrorPagee