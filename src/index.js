import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { search } from './redux/actions'
export { getSearchText } from './redux/selectors'
export { default as uiReducers } from './redux/reducers'

/*const SearchInput = () => {
  const dispatch = useDispatch()

  return <input type="text" onInput={(e)=> dispatch(search(e.target.value))} />
}

export default SearchInput;
*/

const SearchInput = ({ search }) => {
  return <input type='text' onInput={(e) => search(e.target.value)} />
}

export default connect(null, { search })(SearchInput)
