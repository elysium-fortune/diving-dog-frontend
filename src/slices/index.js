import { combineReducers } from 'redux'
import listingsReducer from './listings'

const rootReducer = combineReducers({
    listings: listingsReducer,
})
export default rootReducer
