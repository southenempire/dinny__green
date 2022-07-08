import React, { useState } from 'react'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <header id="navigation">
      <nav className="nav">
        <div className="nav-logo">
          <img src="/images/logo.png" alt="/" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a className="nav-links" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="instructors">
              Instructors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="courses">
              Courses
              <i className="fas fa-chevron-down" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="blog">
              Blog
            </a>
          </li>
          <button className="btn ">Contact</button>
          {/* <li className='nav-item'>
          </li> */}
        </ul>
        <div className="icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>

      {click && (
        <div className="mobile-menu" onclick={'closeMobile-menu'}>
          {/* <span onclick="closeMobile-menu">close</span>
          <i className={click ? 'fas fa-times' : 'fas fa-times'} /> */}
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Intructors">Instructors</a>
            </li>
            <li>
              <a href="#Courses">
                Courses
                <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <button className="btn ">Contact</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
