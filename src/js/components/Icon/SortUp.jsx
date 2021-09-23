import React from 'react'
import classNames from 'classnames'

const SortUp = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		width="17" 
		height="13" 
		viewBox="0 0 17 13" 
		fill="none"
		style={{ display: 'block' }}
	>
		{title && <title>{title}</title>}

		<path 
			strokeWidth="1.5" 
			strokeLinecap="round" 
			strokeLinejoin="round" 		
			d="M4.5 12L4.5 1M4.5 1L1 4.44444M4.5 1L8 4.44444M8.5 12L15.5 12M10 8.5L15.5 8.5M11.5 5L15.5 5M13 1.5L15.5 1.5" 
			stroke={color} />
	</svg>
)

export default SortUp