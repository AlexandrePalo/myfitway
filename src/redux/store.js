import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { mainReducer } from './reducers'

const store = createStore(
  mainReducer,
  {},
  applyMiddleware(reduxThunk, logger)
)

export default store
