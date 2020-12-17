import { combineReducers, createStore } from 'redux'
import { uiReducers } from 'search'
import todo from './reducers'

export default createStore(combineReducers({ ...uiReducers, todo }))
