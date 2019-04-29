import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const fetchQuestions = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/questions')
    dispatch({ type: actionTypes.QUESTIONS_FETCH_ALL, payload: data.reverse() })
  } catch (err) {
    console.log(err)
  }
}

export const createQuestion = (text, tag) => async (dispatch) => {
  try {
    const { data } = await axios.post('/questions', { text, tag })
    dispatch({ type: actionTypes.QUESTIONS_CREATE, payload: data })
    dispatch(push('/'))
  } catch (err) {
    console.log(err)
  }
}

export const createAnswer = (user_id, question_id, is_yes) => async (dispatch) => {
  try {
    const { data } = await axios.post('/answers', {user_id, question_id, is_yes})
    dispatch({type:actionTypes.ANSWERS_CREATE, payload:data})
    dispatch(push('/'))
  } catch (err) {
    console.log(err);
  }
}

export const fetchAnswers = user_id => async (dispatch) => {
  try {
    const { data } = await axios.get('/answers', {params:{'user_id':user_id}})
    dispatch({type:actionTypes.ANSWERS_FETCH, payload:data})
    dispatch(push('/'))
  } catch (err) {
    console.log(err);
  }
}

export const createUser = (name, password) => async (dispatch) => {
  try{
    const { data } = await axios.post('/users', {name, password})
    dispatch({type:actionTypes.USERS_CREATE, payload: data })
    dispatch(push('/'))
  } catch(err) {
    console.log(err);
  }
}

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/users')
    dispatch({ type: actionTypes.USERS_FETCH_ALL, payload: data.reverse() })
  } catch (err) {
    console.log(err)
  }
}
//
export const fetchQuestionAnswers = question_id => async (dispatch) => {
  try {
    const {data} = await axios.get('/question/answers', {params:{'question_id':question_id}})
    dispatch({type:actionTypes.QUESTION_FETCH_ANSWERS, payload: data })
    dispatch(push('/'))
  } catch (err){
    console.log(err);
  }
}
