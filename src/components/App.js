import React, { Component } from 'react'
import * as firebase from 'firebase'

class App extends Component {
  constructor() {
    super()
    this.dbRef = firebase.database().ref()

    this.state = {
      message: 'this sucks'
    }
  }

  componentDidMount() {
    this.dbRef.on('value', snapshot => {
      this.setState({
        message: snapshot.child('message').val()
      })
    })
  }

  render() {
    return (
      <div>
        Home page message: {this.state.message}
      </div>
    );
  }
}

export default App
