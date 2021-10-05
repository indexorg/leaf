import React from 'react'
import classNames from 'classnames'

const SortDown = ({
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
			d="M4.5 1L4.5 12M4.5 12L1 8.55556M4.5 12L8 8.55556M8.5 1L15.5 1M10 4.5L15.5 4.5M11.5 8L15.5 8M13 11.5L15.5 11.5" 
			stroke={color} />
	</svg>
)

export default SortDown