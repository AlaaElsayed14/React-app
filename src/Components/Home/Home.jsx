import React, { Component } from 'react';
import avatar from '../../images/avataaars.svg';
import style from './home.modules.css';

export default class Home extends Component {
  render() {
    return (
        <div className='main text-center'>
            <div className="container">
                <div className="main-info">
                    <img src={avatar} className='mb-4 mt-4' alt="" />
                    <div className="title">
                    <h1>start react</h1>
                    <span className='line line1'></span>
                    <i class="fas fa-star"></i>
                    <span className='line line2'></span>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator </p>
                </div>  
            </div>
      </div>
    )
  }
}
