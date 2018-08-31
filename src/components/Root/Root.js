import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'

import Header from 'components/Header'
import Articles from 'components/Articles/Articles'

const Layout = styled.div`
  width: auto;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 1em;
`

class Root extends Component {
  render() {
    return (
      <Layout>
        <CssBaseline />
        <Header />
        <Articles />
      </Layout>
    )
  }
}

export default withRouter(Root)
