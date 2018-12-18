import React, { Component } from 'react'
import './App.scss'

class App extends Component {
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => {
				console.log(data)
			})
	}
	render() {
		return <div>App</div>
	}
}

export default App
