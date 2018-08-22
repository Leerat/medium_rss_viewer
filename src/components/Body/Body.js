import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getArticles } from 'components/Search/searchSelectors'
import Article from 'components/Article/Article'

const Articles =({articles}) => articles.map(item => <Article key={item.guid} {...item} />)

const Container = styled.section`
  text-align: center;
  transition: all 0.5s ease-in-out;
  transform: translateY(${props => props.loaded ? 0 : '-100px'});
  opacity: ${props => props.loaded ? 1 : 0.01};
  min-height: ${props => props.loaded ? `${props.children.props.articles.length*100}px` : 0};
`

class Body extends Component {
  render() {
    const { articles } = this.props
    const hasArticles = !!articles

    return (
      <Container loaded={hasArticles} >
        {hasArticles && <Articles articles={articles} />}
      </Container>
    )
  }
}

const mstp = state => ({
  articles: getArticles(state)
})

export default connect(
  mstp,
  null
)(Body)
