import React, { Component } from 'react'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      burgerIsActive: false
    }
  }

  toggleBurger = () => {
    this.setState({
      burgerIsActive: !this.state.burgerIsActive
    })
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">BUDGETEER</a>
          <div className={`navbar-burger ${ this.state.burgerIsActive ? 'is-active' : '' }`} onClick={this.toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${ this.state.burgerIsActive ? 'is-active' : '' }`}>
          <a href="/accounts" className="navbar-item">Accounts</a>
          <a href="/budget" className="navbar-item">Budget</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;
