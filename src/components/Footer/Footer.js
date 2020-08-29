import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './Footer.css';

export default function Footer() {
  return (
    <div className='bottom ' style={{ display: 'flex', width: '100%' }}>
      <Navbar
        className='footer'
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <Navbar.Brand style={{ color: 'white', fontSize: '20px' }}>
          Copyright 2020 All Rights Reserved
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
