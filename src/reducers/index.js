import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import tasks from './tasks'

export default combineReducers({ tasks, form })
