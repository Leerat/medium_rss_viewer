import React, { Component } from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'

const LeaveLink = styled(Typography)`
  position: absolute;
  bottom: 0;
  right: 1em;
  text-decoration: underline;
  padding-top: 1em;
`

const Desc = styled(Typography)`
  min-height: 50px;
  padding-bottom: 1em;
`

const DescContainer = styled(Grid)`
  position: relative;
`

const Body = styled.article`
  text-align: left;
  ${props => props.isMobile && `
    float: left;
    position: relative;
    padding: 1em 3em;
  `}
  
  ${props => props.isPrev && `
    transform: translateX(calc(${-1 * props.el?.clientWidth}px + 4em)) !important;
  `}
  
  ${props => props.isNext && `
    transform: translateX(calc(${ props.el?.clientWidth}px - 4em)) !important;
  `}
  
  img {
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  p {
    margin-top: 0;
  }
`

const Wrap = styled(Paper)`
  padding: 1em;
  box-shadow: 0px 6px 12px 2px rgba(0,0,0,0.15) !important;
`

export default class Article extends Component {

  state = {
    width: null
  }

  otm = e => {
    const transform = e.currentTarget.style.transform
    const angle = transform.match(/-?\d+/)[0]
    const rotation = ` rotate(${Math.round((angle*0.1)/2)}deg)`
    e.currentTarget.style.transform = transform + rotation
  }

  getRef = el => {
    this.slide = el
    this.setState({width: el.clientWidth})
  }

  render() {
    const {title, pubDate, description, creator, link, encoded, isMobile, isPrev, isNext} = this.props

    const parser = new DOMParser()
    const html = parser.parseFromString(description || encoded, "text/html")
    const imgSrc = html.getElementsByTagName('img')[0]?.src.replace(/max\/\d*/, 'max/400')
    const desc = html.getElementsByTagName('p')[1]?.innerHTML

    //If there isnt normal img medium gives empty img not from cdn
    const isImg = !/^https:\/\/medium\.com\//.test(imgSrc)

    return (
      <Body isMobile={isMobile} onTouchMove={this.otm} isPrev={isPrev} isNext={isNext} innerRef={this.getRef} el={this.slide} widht={this.state.width}>
      <Wrap>
        <Grid container spacing={16}>
          <Hidden smUp>
            <Grid item xs={12}>
              <Typography variant="title" gutterBottom>
                <a href={link}>{title}</a>
              </Typography>
            </Grid>
          </Hidden>
          {
            isImg && (
              <Grid item xs={12} sm={6}>
                <a href={link}>
                  <img src={imgSrc} alt={title}/>
                </a>
              </Grid>
            )
          }
          <DescContainer item xs={12 } sm={isImg ? 6 : 12}>
            <Hidden xsDown>
              <Typography variant="title" gutterBottom>
                <a href={link}>{title}</a>
              </Typography>
            </Hidden>
            <Typography variant="caption" gutterBottom>
              {pubDate}
            </Typography>
            <Desc gutterBottom dangerouslySetInnerHTML={{__html: desc}} />
            <LeaveLink align="right" variant="button">
              <a href={link}>
                Check it on medium >
              </a>
            </LeaveLink>
          </DescContainer>
        </Grid>
      </Wrap>
      </Body>
    )
  }
}
