import { combineReducers } from 'redux'

import appReducer from 'reducers/appReducer'
import searchReducer from 'components/Search/searchReducer'

export default combineReducers({
  app: appReducer,
  search: searchReducer
})
