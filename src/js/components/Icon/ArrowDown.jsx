import React from 'react'
import classNames from 'classnames'

const ArrowDown = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		width="14" 
		height="8" 
		viewBox="0 0 14 8" 
		fill="none"
	>
		{title && <title>{title}</title>}
		
		<path 
			fillRule="evenodd" 
			clipRule="evenodd" 
			d="M0.646484 1.35359L1.35359 0.646484L7.00004 6.29293L12.6465 0.646484L13.3536 1.35359L7.00004 7.70714L0.646484 1.35359Z" 
			fill={color} />

	</svg>
)

export default ArrowDown