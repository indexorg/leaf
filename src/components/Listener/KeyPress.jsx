import React from 'react'
import update from 'immutability-helper'
import _get from 'lodash/get'

export default class KeyPress extends React.Component {
	state = {
		press: false,
		release: false,
		key: [],
	}

	componentDidMount() {	
		document.addEventListener('keyup', this.listenForRelease)
		document.addEventListener('keydown', this.listenForPress)
	}

	componentWillUnmount() {
		document.removeEventListener('keyup', this.listenForRelease)
		document.removeEventListener('keydown', this.listenForPress)
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			callback,
		} = this.props

		const {
			key,
			press,
			release,
		} = this.state

		if(prevState != this.state) {
			callback(press, release, key)
		}
	}

	getKey = (e, event) => {
		const {
			key,
		} = this.state

		const map = {
			"Down": "ArrowDown",
		    "ArrowDown": "ArrowDown",
		    "Up": "ArrowUp",
		    "ArrowUp": "ArrowUp",
		    "Left": "ArrowLeft",
		    "ArrowLeft": "ArrowLeft",
		    "Right": "ArrowRight",
		    "ArrowRight": "ArrowRight",
		    "Esc": "Escape",
		    "Escape": "Escape",
		}

		let keyPressed = ''

		if(e.key !== undefined) {
			// check if the item exist, return the mapped value, otherwise just return the original value
			keyPressed = _get(map, e.key, e.key)

			const index = key.indexOf(keyPressed)
			let pushedKeys = []

		  	if(index > -1) {
		  		pushedKeys = update(key, {
					$splice: [[index, 1]],
				})
		  	} else {
		  		if(event == 'press') {
			  		pushedKeys = update(key, {
						$push: [keyPressed],
					})
		  		}
		  	}

		  	if(pushedKeys == undefined || pushedKeys == null) {
		  		return []
		  	}

		  	return pushedKeys
		} else if (e.keyCode !== undefined) {
			console.log(e.keyCode)
		} else {

		}	  	
	}

	listenForRelease = e => {
		if(e.isComposing || e.keyCode === 229) {
	    	return
	  	}
	  	
		this.setState({
			press: false,
			release: true,
			key: this.getKey(e, 'release'),
		})
	}

	listenForPress = e => {
		if(e.isComposing || e.keyCode === 229) {
	    	return
	  	}

		this.setState({
			press: true,
			release: false,
			key: this.getKey(e, 'press')
		})
	}


	render() {
		const {
			children,
		} = this.props

		return(
			<React.Fragment>
				{children}
			</React.Fragment>
		)
	}
}