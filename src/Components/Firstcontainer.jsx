import '../styles/firstcontainer.scss'
import React from 'react'

const Firstcontainer = () => {
  return (
    <div className="home__container">
      <div className="give__container">
        <h1>
          Give Your Child A
          <br />
          Chance To Be Unique
        </h1>
        <p>
          Experts agree that a child's personality doesn't fully form <br /> until they are in elementary school. <br /> <a href="/sign-up"> Sign in</a> to enroll your child
        </p>
        <div className="btn__box">
          <button className="btn">Sign up</button>
          <button className="btn__container">Learn more</button>
        </div>
      </div>
      <div className="blur"></div>
    </div>
  )
}

export default Firstcontainer
