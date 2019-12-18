import axios from 'axios';

export const READ_TASKS = 'READ_TASKS';
export const READ_TASK = 'READ_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';


const ROOT_URL = 'https://todo-sample-1.herokuapp.com/api/v1'

export const readTasks = () => async dispatch =>{
  const response = await axios.get(`${ROOT_URL}/task`)
  dispatch({type: READ_TASKS, response})
}

export const postTask = values => async dispatch =>{
  const response = await axios.post(`${ROOT_URL}/task`, values)
  dispatch({type: CREATE_TASK, response})
}

export const deleteTask = id => async dispatch =>{
  await axios.delete(`${ROOT_URL}/task/${id}`)
  dispatch({type: DELETE_TASK, id})
}

export const getTask = id => async dispatch =>{
  const response = await axios.get(`${ROOT_URL}/task/${id}`)
  dispatch({ type: READ_TASK, response })
}
export const putTask = values => async dispatch =>{
  const response = await axios.put(`${ROOT_URL}/task/${values.id}`, values)
  dispatch({ type: UPDATE_TASK, response })
}
