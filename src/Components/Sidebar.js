import React from 'react'

const Sidebar = props => (
	<aside>
		<h3>Sidebar</h3>
		{props.tweets.map(tweet => {
			return (
				<div key={tweet.id}>
					<h4>
						{tweet.title} | id: {tweet.id}
					</h4>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
			)
		})}
	</aside>
)

export default Sidebar
