import React from 'react'
import '../styles/thirdcontainer.scss'

const Thirdcontainer = () => {
  return (
    <div className="third__container">
      <div className="third__heading">
        <h1>Our Features</h1>
        <p>Dinny Green International School is nurtured in grace and truth, raising green, flourishing and successful children.</p>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="circle"></div>
          <div className="text">
            <h4>Awesome Teachers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</p>
          </div>
        </div>
        <div className="card">
          <div className="circle"></div>
          <div className="text">
            <h4>Global Recognition</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="circle"></div>
          <div className="text">
            <h4>Extra curricular activities</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</p>
          </div>
        </div>
        <div className="card">
          <div className="circle"></div>
          <div className="text">
            <h4>Government Approved</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Thirdcontainer
