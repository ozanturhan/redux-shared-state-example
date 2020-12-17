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

## Usage
```jsx
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

```

```jsx
import React from 'react';
import SearchInput from "search";

export const Header = () =>{
  return <SearchInput  />
}

```

## License

MIT © [](https://github.com/)
