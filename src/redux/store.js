import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { mainReducer } from './reducers'

const store = createStore(
  mainReducer,
  {},
  applyMiddleware(reduxThunk)
)

export default store
