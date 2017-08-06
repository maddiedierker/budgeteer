import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import 'bulma/css/bulma.css'

import Navbar from './components/Navbar'
import App from './components/App'
import Accounts from './components/Accounts'
import Budget from './components/Budget'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter className="container">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/accounts" component={Accounts} />
          <Route path="/budget" component={Budget} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
