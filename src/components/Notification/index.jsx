import React, {useState, useEffect} from 'react'

// TODO: message isn't actually centered due to fixed layout and sidebar. Need someway to know when the sidebar is active
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
		<div
		className={`
			bottom-8
			duration-300
			left-1/2
			fixed
			transform
			-translate-x-1/2
			z-1001

			${play ? 'opacity-100 visible' : 'opacity-0 invisible'}
		`}>
			<span
			className={`
				bg-black
				duration-300
				ease-out-expo
				py-4
				px-6
				rounded-md
				shadow-md
				text-white
				transform

				${play ? 'translate-y-0' : 'translate-y-3'}
			`}>
				{message}
			</span>
		</div>
	)
}

export default Notification