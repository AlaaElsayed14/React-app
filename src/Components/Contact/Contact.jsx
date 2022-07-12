import React, { Component } from 'react';
import style from './contact.modules.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
         <div className="title">
              <h2>contact me</h2>
              <span className='line line1'></span>
              <i class="fas fa-star"></i>
              <span className='line line2'></span>
        </div>

        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          
          <div class="form-group">
            <input type="email" class="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          
          <div class="form-group">
            <input type="tel" class="form-control" placeholder='Phone Number' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>

          <div class="form-group">
            <textarea class="form-control" placeholder='Message' rows="6" id="exampleFormControlTextarea1"></textarea>
          </div>

          <button type="submit" class="btn form-btn">Send</button>
        </form>
      </div>
    )
  }
}
