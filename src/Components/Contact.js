import React from 'react';
import './Footer.css';
import * as Icon from 'react-bootstrap-icons';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

const Contact = () => {

  return (
    <section>
      <div className='text-light container text-center icons'>
        < Icon.Facebook className='icone'/>
        <Icon.Github className='icone'/>
        <Icon.Linkedin className='icone'/>
      </div>
    </section>
  )
}

export default Contact