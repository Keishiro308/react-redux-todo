import {
    READ_TASKS,
    READ_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    CREATE_TASK,
   } from '../actions'
  import _ from 'lodash'
  
  
  export default (events = {}, action) => {
    switch (action.type) {
      case READ_TASK:
      case CREATE_TASK:
      case UPDATE_TASK:
        const data = action.response.data.data
        return { ...events, [data.id]: data }
      case READ_TASKS:
        return _.mapKeys(action.response.data.data, 'id')
      case DELETE_TASK:
        delete events[action.id]
        return { ...events }
      default:
        return events
    }
  }
  