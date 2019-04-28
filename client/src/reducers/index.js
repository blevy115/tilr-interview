import { combineReducers } from 'redux'
import questions from './questions'
import answers from './answers'
import { connectRouter } from 'connected-react-router'

const reducers = history => combineReducers({
  questions, answers,
  router: connectRouter(history)
})

export default reducers
