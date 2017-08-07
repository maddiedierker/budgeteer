import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Transactions extends Component {
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

  updateTransaction = (e, key) => {
    const transaction = this.props.transactions[key]
    transaction[e.target.name] = e.target.value
    this.props.updateTransaction(transaction)
  }

  resetEditField = () => {
    this.setState({
      editingFieldName: null
    })
  }

  render() {
    const transactions = this.props.transactions

    if (transactions.length === 0) {
      return (
        <div className="container">
          <h1 className="title has-text-centered">You have no transactions for this account.</h1>
        </div>
      )
    }

    return (
      <table className="table is-striped is-fullwidth" onMouseLeave={() => this.resetEditField()}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(transactions).map(key =>
            <tr key={key}>
              <td width="33%" id={`name-${key}`} onMouseEnter={this.enableEditField}>
                { this.state.editingFieldName === `name-${key}`
                  ?
                    <input className="input is-small" type="text" name="name" defaultValue={transactions[key].name} onChange={(e) => this.updateTransaction(e, key)} />
                  :
                    transactions[key].name
                }
              </td>
              <td width="33%" id={`amount-${key}`} onMouseEnter={this.enableEditField}>
                { this.state.editingFieldName === `amount-${key}`
                  ?
                    <input className="input is-small" type="text" name="amount" defaultValue={transactions[key].amount} onChange={(e) => this.updateTransaction(e, key)} />
                  :
                    transactions[key].amount
                }
              </td>
              <td width="33%" id={`category-${key}`} onMouseEnter={this.enableEditField}>
                { this.state.editingFieldName === `category-${key}`
                  ?
                    <input className="input is-small" type="text" name="category" defaultValue={transactions[key].category} onChange={(e) => this.updateTransaction(e, key)} />
                  :
                    transactions[key].category
                }
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  updateTransaction: PropTypes.func.isRequired
}

Transactions.defaultProps = {
  transactions: []
}

export default Transactions
