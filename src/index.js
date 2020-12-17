import React from 'react'
import { connect } from 'react-redux'
import { search } from './redux/actions'
import { useGlobalState, CHANGE_SEARCH } from 'global-context';

export { getSearchText } from './redux/selectors'
export { default as uiReducers } from './redux/reducers'

/*const SearchInput = () => {
  const dispatch = useDispatch()

  return <input type="text" onInput={(e)=> dispatch(search(e.target.value))} />
}

export default SearchInput;
*/

const SearchInput = ({ search }) => {
  const [{}, dispatch,] = useGlobalState();

  return <div>
    Redux Search: <input type='text' onInput={(e) => search(e.target.value)} />
    Context Search:  <input type='text' onInput={(e) => dispatch({type: CHANGE_SEARCH, payload: e.target.value})} />
  </div>
}

export default connect(null, { search })(SearchInput)
