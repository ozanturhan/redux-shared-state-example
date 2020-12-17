export const SEARCH = 'SEARCH'

export const search = (text) => {
  console.log('search', text)
  return {
    type: SEARCH,
    payload: text
  }
}
