import { POST_COMMENT } from '../actions'

const initialState = {}

export default function postCommentReducer(state = initialState, action) {
	switch (action.type) {
		case POST_COMMENT:
			return action.payload
		default:
			return state
	}
}
