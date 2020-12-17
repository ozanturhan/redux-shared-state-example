import { SEARCH } from './actions'

const initialState = {
  searchText: null
}

const search = function (state = initialState, action) {
  switch (action?.type) {
    case SEARCH: {
      console.log(action.type, action.payload)
      return {
        ...state,
        searchText: action.payload
      }
    }
    default:
      return state
  }
}

const test = function (state = { name: 'ozan' }) {
  return state
}

export default { search, test }
