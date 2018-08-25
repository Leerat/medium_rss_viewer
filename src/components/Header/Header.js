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
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'

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

const AdaptiveTypo = styled(Typography)`
  font-size: calc(1rem + 3vw) !important;
`

const StyledPaper = styled(Paper)`
  text-align: center;
  padding: 0 1em 1em 1em;
  min-height: 152px;
  margin-bottom: 12px;
  box-shadow: 0px 6px 12px 2px rgba(0,0,0,0.15) !important;
`

class Header extends Component {

  state = {
    timer: null,
    name: ''
  }

  getSearch = debounce(()=>{
    const { searchOnMedium } = this.props
    if(this.state.name !== '') this.input.blur() || searchOnMedium(this.state.name)
  }, 2000)

  handleChange = field => e => {
    const searchQuery = e.currentTarget.value

    //We can cb search here
    this.setState({[field]: searchQuery})
  }

  handleClick = () => {
    this.getSearch()
  }

  handleKeyDown = e => {
    if(e.key === 'Enter') this.getSearch()
  }

  getRef = el => {
    this.input = el
  }

  render() {
    const { channel, isSearching, isLoaded } = this.props

    return (
      <StyledPaper>
        <TextField
          id="name"
          label="User account or feed"
          value={this.state.name}
          onChange={this.handleChange('name')}
          fullWidth
          margin="normal"
          style={style}
          inputRef={this.getRef}
          onKeyDown={this.handleKeyDown}
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
          {!isLoaded && !isSearching && <AdaptiveTypo variant="display1" gutterBottom>There is nothing yet</AdaptiveTypo>}
          {
            isSearching ?
              <CircularProgress /> :
              <>
                <AdaptiveTypo variant="display1">
                  <a href={channel.link}>{channel.title}</a>
                </AdaptiveTypo>
                <Typography variant="subheading">
                  {channel.desc}
                </Typography>
              </>
          }
        </Title>
        {/*{isLoaded && <Divider />}*/}
      </StyledPaper>
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
