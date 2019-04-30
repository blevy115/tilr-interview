import actionTypes from '../actions/actionTypes'

const initialState = {
  all: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_FETCH_ALL:
      return { ...state, all: action.payload }
    default:
      return state
  }
}
