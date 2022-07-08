import React from 'react'
import '../styles/footer.scss'

const Footercontainer = () => {
  return (
    <footer>
      <div className="foot">
        <div className="footerline">
          <div className="logoo">
            <img src="/images/Group 61.png" alt="" />
          </div>
          <p className="foothead">Replenish him third creature and meat blessed void a fruit gathered you' re, they're two waters own morning gathered greater.</p>
        </div>
        <div className="footerline">
          <h4>
            <a className="heading" href="/">
              About Us
            </a>
          </h4>
          <p className="line"></p>
          <a className="item" href="/">
            Afficiates
          </a>
          <a className="item" href="/">
            Partners
          </a>
          <a className="item" href="/">
            Reviews
          </a>
          <a className="item" href="/">
            Blogs
          </a>
        </div>
        <div className="footerline">
          <h4>
            <a className="heading" href="/">
              Popular classes
            </a>
          </h4>
          <p className="line"></p>
          <a className="item" href="/">
            Creche
          </a>
          <a className="item" href="/">
            Primary
          </a>
          <a className="item" href="/">
            Secondary
          </a>
          <a className="item" href="/">
            Highschool
          </a>
        </div>
        <div className="footerline">
          <h4>
            <a className="heading" href="/">
              Newsletter
            </a>
          </h4>
          <p className="line"></p>
          <p className="signup">Sign up to newsletter to get Latest updates</p>
          <form className="foot__form">
            <div className="rigt"></div>
            <input className="foot__form__enter" type="text" placeholder=" Enter Email address" />
            <button className="foot__form__button">
              <img src="/images/cusor.png" alt="" />
            </button>
          </form>
          <div className="vect">
            <a href="https:/facebook.com/Dinny-Green-International-Schools">
              <img className="form__image" src="/images/facebook.png" alt="" />
            </a>
            <a href="/">
              <img className="form__image" src="/images/tweeter.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/in.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer__last">Copywright @ 2020 Dinnygreen international</p>
    </footer>
  )
}

export default Footercontainer
