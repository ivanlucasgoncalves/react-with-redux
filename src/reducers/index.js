import { combineReducers } from 'redux'

import userReducer from './userReducer'
import tweetsReducer from './tweetsReducer'
import commentReducer from './commentReducer'

// Combining all Reducers
const reducer = combineReducers({
	user: userReducer,
	tweets: tweetsReducer,
	comment: commentReducer
})

export default reducer
