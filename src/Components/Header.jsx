import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="left-header-container">
        <h3 className="stay">
          <span>Call:</span> +234 9012624162
        </h3>

        <h3 className="move">
          <span>Support:</span> info@yourcompany.com
        </h3>
      </div>

      <div className="right-header-container">
        <a href="long-in">Log in</a>
        <button className="btn__head">Register</button>
      </div>
    </div>
  )
}

export default Header
