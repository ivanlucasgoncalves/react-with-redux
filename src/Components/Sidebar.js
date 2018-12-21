import React from 'react'

class Sidebar extends React.Component {
	render() {
		return (
			<aside>
				<h3>Sidebar</h3>
				{this.props.tweets.map(tweet => {
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
	}
}

export default Sidebar
