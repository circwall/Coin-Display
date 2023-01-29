import React from 'react';
import { useGlobalcontext } from '../../Context';
import * as Icon from 'react-bootstrap-icons';

const ErrorPagee = () => {
    const {empty}= useGlobalcontext()
  return (
    <section className='mt-5'>
        <div className='errosect pt-5 text-center text-light bg-dark'>
            <h1 className='text-light pt-5 mt-5'>PLEASE CHECK INTERNET CONNECTION <span className='text-danger'><Icon.InfoCircleFill/></span></h1>
        </div>
    </section>
  )
}

export default ErrorPagee