import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ReactSwipe from 'react-swipe'

import { getArticles } from 'components/Search/searchSelectors'
import Article from 'components/Article/Article'

const Articles = ({articles, isMobile, currentSlide}) => articles.map((item, index) => (
  <Article
    {...item}
    isMobile={isMobile}
    key={item.guid.toString()}
    isPrev={index === currentSlide - 1}
    isNext={index === currentSlide + 1}
  />
))

const swipeOptions = cb => ({
  continuous: false,
  callback: cb,
})

const Container = styled.section`
  text-align: center;
  transition: all 0.5s ease-in-out;
  transform: translateY(${props => props.loaded ? 0 : '-100px'});
  opacity: ${props => props.loaded ? 1 : 0.01};
  min-height: ${props => props.loaded ? `${document.body.clientHeight - 171}px` : 0};
`

class Body extends Component {

  state = {
    currentSlide: 0
  }

  getCurrentSlide = slide => {
    this.setState({currentSlide: slide})
  }

  render() {
    const { articles } = this.props
    const { currentSlide } = this.state

    const hasArticles = !!articles
    const isMobile = document.body.clientWidth < 800

    return (
      <Container loaded={hasArticles} isMobile={isMobile}>
        {
          hasArticles && (
            isMobile ? <div>
                <ReactSwipe
                  key={articles?.length}
                  swipeOptions={swipeOptions(this.getCurrentSlide)}
                >
                  <Articles articles={articles} isMobile={isMobile} currentSlide={currentSlide} />
                </ReactSwipe>
              </div>
              :
              <Articles articles={articles} isMobile={isMobile} />
          )
        }
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
