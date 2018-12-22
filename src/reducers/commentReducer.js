import { POST_COMMENT } from '../actions'

const initialState = {}

const postCommentReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_COMMENT:
			return action.payload
		default:
			return state
	}
}

export default postCommentReducer
