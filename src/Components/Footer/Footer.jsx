import React, { Component } from 'react';
import style from './footer.modules.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer-location">
                        <h3>location</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="footer-social">
                        <h3> AROUND THE WEB </h3>
                        <div className="social-icons">
                            <a href='#'><i class="fab fa-facebook-f"></i></a>
                            <a href='#'><i class="fab fa-twitter"></i></a>
                            <a href='#'><i class="fab fa-linkedin-in"></i></a>
                            <a href='#'><i class="fas fa-basketball-ball"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, MIT licensed Bootstrap
                     theme created by Route</p>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <small>Copyright © Your Website 2021</small>
        </div>
      </div>
    )
  }
}
