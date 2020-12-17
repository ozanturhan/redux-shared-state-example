# React Redux Share State Between Libraries and Application Example

## Install

```bash
yarn install
yarn build:core
yarn build:app
yarn start:app
```

## Projects
* app (application - ./example/app/package.json)
* core (library - ./example/core/package.json)
* search (library - ./package.json)

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

In the end of the day we could reach global state from ui library, core library and application.

## Usage
```jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { getSearchText } from 'search' // from ui library
import { useCustomHook } from 'search-core' // from core library

export const Content = () => {
  const searchText = useSelector(getSearchText) // use redux selector in application
  const searchText2 = useCustomHook() // use redux in core module

  return (
    <div>
      <div>Search Text From App: {searchText}</div>
      <div>Search Text From Core: {searchText2}</div>
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
