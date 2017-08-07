import React, { Component } from 'react'
import * as firebase from 'firebase'
import Account from './Account'

class Accounts extends Component {
  constructor(props) {
    super(props)
    this.dbRoot = firebase.database().ref()

    this.state = {
      accounts: { }
    }
  }

  componentDidMount() {
    this.dbRoot.on('value', snapshot => {
      this.setState({
        accounts: snapshot.child('accounts').val()
      })
    })
  }

  updateAccount = (oldAccount, newAccount) => {
    const accounts = [...this.state.accounts]
    const accountIndex = accounts.indexOf(oldAccount)

    if (accountIndex !== -1) {
      accounts[accountIndex] = newAccount
      this.dbRoot.update({ accounts })
      this.setState({ accounts })
    }
  }

  render() {
    if (this.state.accounts.length === 0) {
      return (
        <h1 className="title has-text-centered">You don't have any accounts set up.</h1>
      )
    }

    const account = this.state.accounts[0]

    return (
      <Account account={account} updateAccount={this.updateAccount} />
    )
  }
}

export default Accounts
