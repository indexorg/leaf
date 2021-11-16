import React from 'react'

// Styles
import {
    Control,
    Element,
} from './Toggle.styles.js'

const Toggle = ({
	onChange,
	value = 0,
}) => (
	<Element
	enabled={value ? true : false}
	onClick={() => onChange(!value)}>
		{value ? 'on' : 'off'}

		<Control
		enabled={value ? true : false}
		aria-hidden />
	</Element>
)

export default Toggle