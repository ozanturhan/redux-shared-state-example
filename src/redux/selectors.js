export const getSearchState = (store) => store.search

export const getSearchText = (store) =>
  getSearchState(store) ? getSearchState(store).searchText : null
