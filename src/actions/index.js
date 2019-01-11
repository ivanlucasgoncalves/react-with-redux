// Action types
export const FETCH_USER = 'FETCH_USER'
export const FETCH_TWEETS = 'FETCH_TWEETS'
export const POST_COMMENT = 'POST_COMMENT'

// Action creators
export const fetchUser = () => dispatch => {
	dispatch({
		type: FETCH_USER,
		payload: {
			name: 'Ivan Lucas Goncalves',
			age: 34
		}
	})
}

export const fetchTweets = () => dispatch => {
	dispatch({
		type: FETCH_TWEETS,
		payload: fetch('https://my-json-server.typicode.com/typicode/demo/posts')
			.then(res => res.json())
			.then(tweets => tweets)
	})
}

export const postComment = data => dispatch => {
	dispatch({
		type: 'POST_COMMENT',
		payload: fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(comment => comment)
	})
}
