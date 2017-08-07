import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccountHeader from './AccountHeader'
import Transactions from './Transactions'

class Account extends Component {
  updateTransaction = (transaction) => {
    const account = {...this.props.account}
    const transactionIndex = this.props.account.transactions.indexOf(transaction)
    account.transactions[transactionIndex] = transaction
    this.props.updateAccount(this.props.account, account)
  }

  updateAccount = (e) => {
    const account = {...this.props.account}
    account[e.target.name] = e.target.value
    this.props.updateAccount(this.props.account, account)
  }

  render() {
    return (
      <div>
        <AccountHeader
          name={this.props.account.name}
          balance={this.props.account.balance}
          type={this.props.account.type}
          updateAccount={this.updateAccount} />
        <Transactions transactions={this.props.account.transactions} updateTransaction={this.updateTransaction} />
      </div>
    )
  }
}

Account.propTypes = {
  account: PropTypes.object.isRequired,
  updateAccount: PropTypes.func.isRequired
}

Account.defaultProps = {
  account: {}
}

export default Account
