import React from 'react'
import classNames from 'classnames'

const ArrowDetailedSmall = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		width="11" 
		height="12" 
		viewBox="0 0 11 12" 
		fill="none"
	>
		{title && <title>{title}</title>}
		
		<path d="M5.5 1V11M5.5 11L10 6.55556M5.5 11L1 6.55556" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

	</svg>
)

export default ArrowDetailedSmall