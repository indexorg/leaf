import React from 'react'
import classNames from 'classnames'

const ArrowLeft = ({
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
			d="M6.64641 0.646484L7.35352 1.35359L1.70707 7.00004L7.35352 12.6465L6.64641 13.3536L0.292855 7.00004L6.64641 0.646484Z" 
			fill={color} />

	</svg>
)

export default ArrowLeft