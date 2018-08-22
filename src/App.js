import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

injectGlobal`
  a {
    text-decoration: none;
    color: inherit;
  }
`

import Root from 'components/Root/Root'

class App extends Component {
  render() {
    return (
      <Router>
        <Root />
      </Router>
    )
  }
}

export default hot(module)(App)
