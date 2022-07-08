import React from 'react'
import '../styles/fourthcontainer.scss'

const Fourthcontainer = () => {
  return (
    <div className="fourth-container">
      <div className="fourth__heading">
        <h1>Find Out More About Our Learning Experience</h1>
        <p> We have built hospitals, arranged doctor appointmentshave the diagnose and treat yourem ipsu r aol ad meniam, quis nostrud exercitation.</p>
        <div className="culture">
          <span>
            <img className="greentick" src="/images/good-vect.png" alt="" />
            Culture in diversity
          </span>
          <span>
            <img className="greentick" src="/images/good-vect.png" alt="" />
            We have built hospitals, arranged doctor.
          </span>
          <span>
            <img className="greentick" src="/images/good-vect.png" alt="" />
            We have built hospitals, arranged doctor.
          </span>
        </div>
        <div className="learn-more">
          <button className="btn1">learn-more</button>
        </div>
      </div>
      <div className="pic">
        <img src="/images/4 img.png" alt="" />
      </div>
    </div>
  )
}

export default Fourthcontainer
