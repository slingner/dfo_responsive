import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar bg='light'>
      <Navbar.Brand href='#home'>
        <img
          src={logo}
          width='200'
          height='auto'
          className='d-inline-block align-center mainlogo'
          alt='logo'
        />
      </Navbar.Brand>
    </Navbar>
  );
}
