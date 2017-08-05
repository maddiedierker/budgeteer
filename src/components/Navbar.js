import React, { Component } from 'react';

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
          <a className="navbar-item" href="/">Budgeteer</a>
          <div className={`navbar-burger ${ this.state.burgerIsActive ? 'is-active' : '' }`} onClick={this.toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${ this.state.burgerIsActive ? 'is-active' : '' }`}>
          <div className="navbar-start">
            <a className="navbar-item" href="/">Accounts</a>
            <a className="navbar-item" href="/">Budget</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
