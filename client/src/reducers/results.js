import actionTypes from '../actions/actionTypes'

const initialState = {
  all: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUESTION_FETCH_ANSWERS:
      return { ...state, all: action.payload }
    default:
      return state
  }
}
