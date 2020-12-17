import React from 'react'
import { useSelector } from 'react-redux'
import { getSearchText } from 'search'
import { useCustomHook, useCustomHookWithContext } from 'search-core'
import { useGlobalState } from 'global-context'

export const Content = () => {
  const searchText = useSelector(getSearchText)
  const searchText2 = useCustomHook()
  const [state] = useGlobalState();
  const searchTextFromGlobalStateViaCoreModule = useCustomHookWithContext();

  return (
    <div>
      <div>Search Text From App (Redux): {searchText}</div>
      <div>Search Text From Core (Redux): {searchText2}</div>
      <div>Search Text From Global Context: {state.searchText}</div>
      <div>Search Text From Global Context via core module: {searchTextFromGlobalStateViaCoreModule}</div>
    </div>
  )
}
