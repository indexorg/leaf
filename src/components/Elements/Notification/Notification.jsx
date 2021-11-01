import React, {useEffect, useState} from 'react'

// Styles
import {Element} from './Notification.styles.js'

const Notification = ({
	message,
	shouldPlay,
	isDismissed
}) => {
	const [play, setPlay] = useState(shouldPlay)

	useEffect(() => {
		let animationTimer = null
		
		if(play) {
			animationTimer = setTimeout(() => {
				setPlay(false)			
				isDismissed()
			}, 3000)
		}

		return () => {
			clearTimeout(animationTimer)
		}
	}, [play])
	
	useEffect(() => {
		setPlay(shouldPlay)
	}, [shouldPlay])

	return(
		<Element
		visible={play}>
			<span>
				{message}
			</span>
		</Element>
	)
}

export default Notification