import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import 'typeface-roboto'

import App from 'App'
import configureStore from './store'
const store = configureStore()

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
