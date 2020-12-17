import {CHANGE_SEARCH}from './actions'

const reducers = (state, action) => {
 switch (action.type){
   case CHANGE_SEARCH: {
     return {...state,  searchText: action.payload}
   }
 }
}

export default reducers;
