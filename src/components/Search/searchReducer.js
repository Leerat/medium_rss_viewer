import * as types from 'constants.js'
import { START, SUCCESS, FAIL } from 'constants.js'

const defaultState = {
  status: null,
  result: null,
  isFetching: false
}

export default (state = defaultState, action ) => {
  const { type, payload, response, error } = action

  switch ( type ) {
    case types.SEARCH_ON_MEDIUM+START:
      return {
        ...state,
        isFetching: true,
      }
    case types.SEARCH_ON_MEDIUM+FAIL:
      return {
        ...defaultState,
        isFetching: false,
      }
    case types.SEARCH_ON_MEDIUM+SUCCESS:
      return {
        ...state,
        result: payload.rss,
        isFetching: false,
      }
    default:
      return state
  }
}
