import React, { Component } from 'react';
import style from './about.modules.css';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className="title">
              <h2>about</h2>
              <span className='line line1'></span>
              <i class="fas fa-star"></i>
              <span className='line line2'></span>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto">
              <p>Freelancer is a free bootstrap theme created by Route.
                The download includes the complete source files including
                HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
              </div>
              <div className="col-lg-6 ml-auto">
                <p>You can create your own custom avatar for the masthead,
                  change the icon in the dividers, and add your email address
                  to the contact form to make it fully functional!
                </p>
              </div>
           
          </div>
        </div>
      </div>
    )
  }
}
