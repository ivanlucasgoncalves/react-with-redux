import React from 'react'
import { connect } from 'react-redux'
import './App.scss'

import { fetchUser, fetchTweets, postComment } from '../actions'
import Sidebar from './Sidebar'

class App extends React.Component {
	componentDidMount() {
		this.props.fetchUser()
		this.props.fetchTweets()
	}
	handlePost = e => {
		e.preventDefault()

		// Placeholder content for posting new Tweet
		const newComment = {
			title: 'Awesome!!!!!',
			body:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
		}
		this.props.postComment(newComment)
	}
	render({ name, age, tweets, comment } = this.props) {
		return (
			<React.Fragment>
				<h1>React + Redux | Boilerplate</h1>
				<h2>
					{name} | {age}
				</h2>
				<section className='content'>
					<div className='content__inner'>
						<h3>Content</h3>
						{tweets.map(tweet => {
							return (
								<div key={tweet.id}>
									<h2>
										{tweet.title} | id: {tweet.id}
									</h2>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.
									</p>
								</div>
							)
						})}
						<div className='comment'>
							<h3>{comment.title}</h3>
							<p>{comment.body}</p>
							<button onClick={this.handlePost}>Submit a comment</button>
						</div>
					</div>
					<Sidebar tweets={tweets} />
				</section>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	name: state.user.name,
	age: state.user.age,
	tweets: state.tweets,
	comment: state.comment
})

export default connect(
	mapStateToProps,
	{
		fetchUser,
		fetchTweets,
		postComment
	}
)(App)
