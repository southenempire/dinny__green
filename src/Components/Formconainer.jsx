import React from 'react'
import '../styles/Formcontainer.scss'

const Formcontainer = () => {
  return (
    <div className="form-container">
      <h1>Contact Us</h1>

      <form>
        <div className="form-box">
          <div className="type-box">
            <input placeholder="Name" />
          </div>
          <div className="type-box">
            <input placeholder="Email" />
          </div>
          <div className="type-box">
            <input placeholder="Phone" />
          </div>
          <div className="type-box">
            <input placeholder="Subject" />
          </div>
        </div>
        <div className="message-box">
          <textarea name="" placeholder="Message" />
        </div>
        <div className="snd">
          <button className="nd">send now</button>
        </div>
      </form>
    </div>
  )
}
export default Formcontainer
