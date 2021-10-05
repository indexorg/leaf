import React from 'react'
import update from 'immutability-helper'
import _throttle from 'lodash/throttle'

export default class MouseMove extends React.Component {
	state = {
		mouseUp: false,
		mouseDown: false,
		coordinates: {},
	}

	constructor(props) {
		super(props)

		this.onThrottledMouseMove = _throttle(this.checkMousePosition, 16)
	}

	componentDidMount() {
		
	}
	

	componentDidUpdate(prevProps, prevState) {
		const {
			callback,
		} = this.props

		const {
			mouseUp,
			mouseDown,
			coordinates,
		} = this.state

		if(prevState != this.state) {
			callback(mouseDown, mouseUp, coordinates)
		}
	}

	checkMousePosition = e => {
		const {
			coordinates,
		} = this.state

		this.setState({
			coordinates: update(coordinates, {
				$merge: {
					moved: {
						x: e.clientX,
						y: e.clientY,
					}
				}
			})
		})
	}

	render() {
		const {
			children,
		} = this.props

		const {
			coordinates,
		} = this.state

		return(
			<div
				onMouseUp={e => {
					this.setState({
						mouseUp: true,
						mouseDown: false,
						coordinates: update(coordinates, {
							$unset: ['pressed'],
						})
					})
				}}

				onMouseDown={e => {
					this.setState({
						mouseUp: false,
						mouseDown: true,
						coordinates: update(coordinates, {
							$merge: {
								pressed: {
									x: e.clientX,
									y: e.clientY,
								}
							}
						})
					})
				}}

				onMouseMove={e => {
					e.persist()
					this.onThrottledMouseMove(e)
				}}
			>
				{children}
			</div>
		)
	}
}