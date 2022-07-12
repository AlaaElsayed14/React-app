import React, { Component } from 'react';
import style from './navbar.modules.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-light sticky-top  text-uppercase">
           <div className="container">
                <a class="navbar-brand" href="#">start react</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className='menu'>menu</span>
                 
                 <div className="navbar-icon">
                 <span className="toggle-icon"></span>
                 <span className='toggle-icon'></span>
                 <span className='toggle-icon'></span>
                 </div>
                 
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto"> 
                        <li class="nav-item">
                        <Link class="nav-link" to="portfolio">portfolio</Link>
                        </li>

                        <li class="nav-item">
                        <Link class="nav-link" to="about">about</Link>
                        </li>

                        <li class="nav-item">
                        <Link class="nav-link" to="contact">contact</Link>
                        </li>   
                    </ul>
                </div>
           </div>
        </nav>
    )
  }
}
