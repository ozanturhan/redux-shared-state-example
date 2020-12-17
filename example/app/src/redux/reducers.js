import { TODO_SOMETHING } from './actions'

const initialState = {
  todoText: null
}

const todo = function (state = initialState, action) {
  switch (action?.type) {
    case TODO_SOMETHING: {
      return {
        ...state,
        todoText: action.payload
      }
    }
    default:
      return state
  }
}

export default todo
