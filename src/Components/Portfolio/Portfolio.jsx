import React, { Component } from 'react';
import cabin from '../../images/cabin.png';
import cake from '../../images/cake.png';
import circus from '../../images/circus.png';
import game from '../../images/game.png';
import safe from '../../images/safe.png';
import submarine from '../../images/submarine.png';
import style from './portfolio.modules.css'


export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="portfolio">
          <div className="container">
            
            <div className="title">
              <h2>portfolio</h2>
              <span className='line line1'></span>
              <i class="fas fa-star"></i>
              <span className='line line2'></span>
            </div>
              
            <div className="row mt-4">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-item mb-4">
                    <img src={cabin} className='rounded img-fluid' alt="" />
                    <div className="portfolio-icon" data-toggle="modal" data-target="#exampleModal1">
                      <i class="fas fa-plus"></i>
                    </div>
                </div>
            </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-item mb-4">
                    <img src={cake} className='rounded img-fluid' alt="" />
                    <div className="portfolio-icon"  data-toggle="modal" data-target="#exampleModal2">
                      <i class="fas fa-plus"></i>
                    </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-item mb-4">
                    <img src={circus} className='rounded img-fluid' alt="" />
                    <div className="portfolio-icon"  data-toggle="modal" data-target="#exampleModal3">
                      <i class="fas fa-plus"></i>
                    </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-item mb-4">
                  <img src={game} className='rounded img-fluid' alt="" />
                  <div className="portfolio-icon"  data-toggle="modal" data-target="#exampleModal4">
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-item mb-4">
                    <img src={safe} className='rounded img-fluid' alt="" />
                    <div className="portfolio-icon"  data-toggle="modal" data-target="#exampleModal5">
                      <i class="fas fa-plus"></i>
                    </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-item mb-4">
                    <img src={submarine} className='rounded img-fluid' alt="" />
                    <div className="portfolio-icon"  data-toggle="modal" data-target="#exampleModal6">
                      <i class="fas fa-plus"></i>
                    </div>
                </div>
              </div>
        </div>
        </div>
        </div>


  {/* modal#1 */}
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="title">
                <h5 class="modal-title" id="exampleModalLabel">LOG CABIN</h5>
                <span className='line line1'></span>
                <i class="fas fa-star"></i>
                <span className='line line2'></span>
          </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              {/* <span aria-hidden="true" className=''>&times;</span> */}
              <i aria-hidden="true" class="fas fa-times closeIcon"></i>
            </button>
          </div>

          <div class="modal-body">
            <img src={cabin} alt="" className='img-fluid rounded' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                itaque. Nam.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal"><i class="fas fa-times"> </i>Close Icon</button>
          </div>
        </div>
      </div>
      </div>

  {/* modal#2 */}
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="title">
                <h5 class="modal-title" id="exampleModalLabel">LOG CABIN</h5>
                <span className='line line1'></span>
                <i class="fas fa-star"></i>
                <span className='line line2'></span>
          </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              {/* <span aria-hidden="true" className=''>&times;</span> */}
              <i aria-hidden="true" class="fas fa-times closeIcon"></i>
            </button>
          </div>

          <div class="modal-body">
            <img src={cake} alt="" className='img-fluid rounded' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                itaque. Nam.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal"><i class="fas fa-times"> </i>Close Icon</button>
          </div>
        </div>
      </div>
      </div>

      {/* modal#3 */}
      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="title">
                <h5 class="modal-title" id="exampleModalLabel">LOG CABIN</h5>
                <span className='line line1'></span>
                <i class="fas fa-star"></i>
                <span className='line line2'></span>
          </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              {/* <span aria-hidden="true" className=''>&times;</span> */}
              <i aria-hidden="true" class="fas fa-times closeIcon"></i>
            </button>
          </div>

          <div class="modal-body">
            <img src={circus} alt="" className='img-fluid rounded' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                itaque. Nam.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal"><i class="fas fa-times"> </i>Close Icon</button>
          </div>
        </div>
      </div>
      </div>

      {/* modal#4 */}
      <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="title">
                <h5 class="modal-title" id="exampleModalLabel">LOG CABIN</h5>
                <span className='line line1'></span>
                <i class="fas fa-star"></i>
                <span className='line line2'></span>
          </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              {/* <span aria-hidden="true" className=''>&times;</span> */}
              <i aria-hidden="true" class="fas fa-times closeIcon"></i>
            </button>
          </div>

          <div class="modal-body">
            <img src={game} alt="" className='img-fluid rounded' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                itaque. Nam.</p>
          </div>
          <div class="modal-footer"> 
            <button type="button" class="btn" data-dismiss="modal"><i class="fas fa-times"> </i>Close Icon</button>
          </div>
        </div>
      </div>
      </div>

   {/* modal#5 */}
      <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="title">
                <h5 class="modal-title" id="exampleModalLabel">LOG CABIN</h5>
                <span className='line line1'></span>
                <i class="fas fa-star"></i>
                <span className='line line2'></span>
          </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              {/* <span aria-hidden="true" className=''>&times;</span> */}
              <i aria-hidden="true" class="fas fa-times closeIcon"></i>
            </button>
          </div>

          <div class="modal-body">
            <img src={safe} alt="" className='img-fluid rounded' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                itaque. Nam.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal"><i class="fas fa-times"> </i>Close Icon</button>
          </div>
        </div>
      </div>
      </div>

    {/* modal#6 */}
      <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="title">
                <h5 class="modal-title" id="exampleModalLabel">LOG CABIN</h5>
                <span className='line line1'></span>
                <i class="fas fa-star"></i>
                <span className='line line2'></span>
          </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              {/* <span aria-hidden="true" className=''>&times;</span> */}
              <i aria-hidden="true" class="fas fa-times closeIcon"></i>
            </button>
          </div>

          <div class="modal-body">
            <img src={submarine} alt="" className='img-fluid rounded' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                itaque. Nam.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal"><i class="fas fa-times"> </i>Close Icon</button>
          </div>
        </div>
      </div>
      </div>

    </>

    )
  }
}
