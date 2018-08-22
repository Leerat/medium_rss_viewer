import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

import Header from 'components/Header'
import Body from 'components/Body/Body'

const Layout = styled.div`
  width: auto;
  max-width: 720px;
  margin: 0 auto;
  padding: 1em;
`

const StyledPaper = styled(Paper)`
  padding: 0 1em 1em 1em;
  min-height: 152px;
`

class Root extends Component {
  render() {
    return (
      <Layout>
        <CssBaseline />
        <StyledPaper>
          <Header />
          <Body />
        </StyledPaper>
      </Layout>
    )
  }
}

export default withRouter(Root)
