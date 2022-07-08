import React from 'react'
import '../styles/secondcontainer.scss'

const Secondcontainer = () => {
  return (
    <div className="second__container">
      <div className="girlpic">
        <img src="/images/dinny7_n (1).png" alt="/" />
      </div>
      <div className="boxes__second"></div>
      <div className="heading-write-up">
        <h1>
          Advance Learning System <br /> Around The World
        </h1>
        <p>
          We have made a collaborative effort in bringing together <br /> scientific expertise from other countries, steered jointly <br /> by their governments on the basis of shared, <br /> policy-driven interests.
        </p>
        <div className="box__stage">
          <div className="box-1">
            25k<sup>+</sup>
            <p className="one">Teachers</p>
          </div>
          <div className="box-2">
            74k<sup>+</sup>
            <p className="two">Active Courses</p>
          </div>
          <div className="box-3">
            250<p className="three">Extra Curriular </p>
          </div>
        </div>
        <button className="btn__sec">Learn more</button>
      </div>
    </div>
  )
}

export default Secondcontainer
