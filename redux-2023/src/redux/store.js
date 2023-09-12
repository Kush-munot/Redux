import {createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'


const store=createStore(rootReducer, applyMiddleware(logger, thunk))
export default store