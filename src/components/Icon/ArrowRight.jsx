import React from 'react'
import classNames from 'classnames'

const ArrowRight = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		width="8" 
		height="14" 
		viewBox="0 0 8 14" 
		fill="none"
		style={{ display: 'block' }}
	>
		{title && <title>{title}</title>}
		
		<path 
			fillRule="evenodd" 
			clipRule="evenodd" 
			d="M1.35359 0.646484L0.646484 1.35359L6.29293 7.00004L0.646485 12.6465L1.35359 13.3536L7.70715 7.00004L1.35359 0.646484Z" 
			fill={color} />

	</svg>
)

export default ArrowRight
