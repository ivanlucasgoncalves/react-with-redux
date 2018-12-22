// Importing action type
import { FETCH_USER } from '../actions'

const initialState = {
	name: null,
	age: null
}

// User
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload
		default:
			return state
	}
}

export default userReducer
