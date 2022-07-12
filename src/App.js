import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Routes , Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Home/>
      <Routes>
          <Route path='portfolio' element={<Portfolio/>}/> 
          <Route path='about' element={<About/>}/> 
          <Route path='contact' element={<Contact/>}/> 
       </Routes>
       <Footer/>

       
      </>
    )
  }
}
