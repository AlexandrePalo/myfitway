import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import main from '../reducers'

export default createStore(main, {}, applyMiddleware(reduxThunk, logger))
