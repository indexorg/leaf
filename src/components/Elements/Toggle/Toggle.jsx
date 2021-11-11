import React from 'react'

// Styles
import {
    Control,
    Element,
} from './Toggle.styles.js'

const Toggle = ({
	onChange,
	value = 0,
}) => {
	return(
		<Element
		enabled={value ? true : false}
		onClick={e => {
			onChange(!value)
		}}>
			{value ? 'on' : 'off'}

			<Control
            enabled={value ? true : false}
			aria-hidden>
			</Control>
		</Element>
	)
}

export default Toggle