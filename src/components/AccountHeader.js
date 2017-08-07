import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AccountHeader extends Component {
  constructor() {
    super()
    this.state = {
      editingFieldName: null
    }
  }

  enableEditField = (e) => {
    this.setState({
      editingFieldName: e.target.id
    })
  }

  resetEditField = () => {
    this.setState({
      editingFieldName: null
    })
  }

  render() {
    return (
      <section className="hero is-primary" onMouseLeave={() => this.resetEditField()}>
        <div className="hero-body">
          <div className="container">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Name</p>
                  { this.state.editingFieldName === "name"
                    ?
                      <input className="input" type="text" name="name" value={this.props.name} onChange={this.props.updateAccount} />
                    :
                      <p id="name" className="title" onMouseEnter={this.enableEditField}>{this.props.name}</p>
                  }
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Balance</p>
                  { this.state.editingFieldName === "balance"
                    ?
                      <input className="input" type="text" name="balance" value={this.props.balance} onChange={this.props.updateAccount} />
                    :
                      <p id="balance" className="title" onMouseEnter={this.enableEditField}>{this.props.balance}</p>
                  }
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Type</p>
                  { this.state.editingFieldName === "type"
                    ?
                      <input className="input" type="text" name="type" value={this.props.type} onChange={this.props.updateAccount} />
                    :
                      <p id="type" className="title" onMouseEnter={this.enableEditField}>{this.props.type}</p>
                  }
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    )
  }
}

AccountHeader.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  updateAccount: PropTypes.func.isRequired
}

AccountHeader.defaultProps = {
  name: "--",
  balance: 0,
  type: "--"
}

export default AccountHeader
