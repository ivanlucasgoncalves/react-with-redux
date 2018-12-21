import { FETCH_TWEETS } from '../actions'

const initialState = []

// Tweets
export default function tweetsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_TWEETS:
			return [...state, ...action.payload]
		default:
			return state
	}
}
