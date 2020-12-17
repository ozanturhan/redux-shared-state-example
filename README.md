# React Redux and Context Share State Between Libraries and Application Example

## Install

```bash
yarn install
yarn build:core
yarn build:app
yarn build:global-context
yarn build:all // build all libraries and application
yarn start:app
```

## Projects
* app (application - ./example/app/package.json)
* core (library - ./example/core/package.json)
* search (ui-library - ./package.json)

## Explanation
We should combineReducers in application. We import ui reducers in application store.js.

```js
import { combineReducers, createStore } from 'redux'
import { uiReducers } from 'search' // ui reducers (state) from ui libraru
import todo from './reducers' // reducers(state) from application

export default createStore(combineReducers({ ...uiReducers, todo }))
```

We can also reach state from core library like that:

```js
// file: ./examples/core/src/hooks
import { useSelector } from 'react-redux'

export const useCustomHook = () => {
  return useSelector((state) => state.search.searchText) // this state generated in search (ui) library
}
```

```js
// file: ./examples/core/src/hooks
import { useGlobalState } from 'global-context' // use global context from core module

export const useCustomHookWithContext = () => {
  const [{searchText}] = useGlobalState()
  return searchText;
}
```

In the end of the day we could reach global state from ui library, core library and application.

## Usage
```jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { getSearchText } from 'search'
import { useCustomHook, useCustomHookWithContext } from 'search-core'
import { useGlobalState } from 'global-context'

export const Content = () => {
  const searchText = useSelector(getSearchText)
  const searchText2 = useCustomHook()
  const [state] = useGlobalState(); // usage example for application from global-context mobulde (context api)
  const searchTextFromGlobalStateViaCoreModule = useCustomHookWithContext(); // usage example for global contex with context api from core module

  return (
    <div>
      <div>Search Text From App (Redux): {searchText}</div>
      <div>Search Text From Core (Redux): {searchText2}</div>
      <div>Search Text From Global Context: {state.searchText}</div>
      <div>Search Text From Global Context via core module: {searchTextFromGlobalStateViaCoreModule}</div>
    </div>
  )
}


```

```jsx
import React from 'react';
import SearchInput from "search";

export const Header = () =>{
  return <SearchInput  />
}

```

```jsx
const SearchInput = ({ search }) => {
  const [{}, dispatch,] = useGlobalState();

  return <div>
    // redux example
    Redux Search: <input type='text' onInput={(e) => search(e.target.value)} />
    // context example
    Context Search:  <input type='text' onInput={(e) => dispatch({type: CHANGE_SEARCH, payload: e.target.value})} />
  </div>
}

export default connect(null, { search })(SearchInput)

```
