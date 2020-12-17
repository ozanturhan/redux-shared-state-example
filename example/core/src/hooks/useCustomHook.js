import { useSelector } from 'react-redux'

export const useCustomHook = () => {
  return useSelector((state) => state.search.searchText)
}
