import { combineReducers } from 'redux'
import questions from './questions'
import answers from './answers'
import results from './results'
import users from './users'
import { connectRouter } from 'connected-react-router'

const reducers = history => combineReducers({
  questions, answers, results, users,
  router: connectRouter(history)
})

export default reducers
