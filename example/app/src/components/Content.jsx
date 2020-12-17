import React from 'react'
import { useSelector } from 'react-redux'
import { getSearchText } from 'search'
import { useCustomHook } from 'search-core'

export const Content = () => {
  const searchText = useSelector(getSearchText)
  const searchText2 = useCustomHook()

  return (
    <div>
      <div>Search Text From App: {searchText}</div>
      <div>Search Text From Core: {searchText2}</div>
    </div>
  )
}
