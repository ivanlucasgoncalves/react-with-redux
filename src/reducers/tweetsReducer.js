import { FETCH_TWEETS } from '../actions'

const initialState = []

// Tweets
const tweetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TWEETS:
			return [...state, ...action.payload]
		default:
			return state
	}
}

export default tweetsReducer
