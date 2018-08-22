// First of all libs imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

//When component lib imports
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'

//And when other homebrew imports
import debounce from 'utils/debounce'
import { searchOnMedium } from 'components/Search/searchActions'
import { getChannel, isSearching } from 'components/Search/searchSelectors'

const Body = styled.div`
  margin-bottom: 1em;
  text-align: center;
`

const Title = styled.div`
  //min-height: 83px;
`

const style = {
  marginBottom: '1.5em'
}

class Header extends Component {

  state = {
    timer: null,
    name: ''
  }

  getSearch = debounce(()=>{
    const { searchOnMedium } = this.props
    if(this.state.name !== '') searchOnMedium(this.state.name)
  }, 1000)

  handleChange = field => e => {
    const searchQuery = e.currentTarget.value

    this.setState({[field]: searchQuery}, this.getSearch)
  }

  handleClick = e => {
    this.getSearch()
  }

  render() {
    const { channel, isSearching, isLoaded } = this.props

    return (
      <Body>
        <TextField
          id="name"
          label="User account or feed"
          value={this.state.name}
          onChange={this.handleChange('name')}
          fullWidth
          margin="normal"
          style={style}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.handleClick} >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Title>
          {!isLoaded && !isSearching && <Typography variant="display1" gutterBottom>There is nothing yet</Typography>}
          {
            isSearching ?
              <CircularProgress /> :
              <>
                <Typography variant="display2">
                  <a href={channel.link}>{channel.title}</a>
                </Typography>
                <Typography variant="headline">
                  {channel.desc}
                </Typography>
              </>
          }
        </Title>
        {isLoaded && <Divider />}
      </Body>
    )
  }
}

const mstp = state => ({
  isSearching: isSearching(state),
  channel: getChannel(state),
  isLoaded: !!getChannel(state).title
})

export default connect(
  mstp,
  {
    searchOnMedium
  }
)(Header)
