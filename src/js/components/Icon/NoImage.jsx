import React from 'react'
import classNames from 'classnames'

const NoImage = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (	
	<svg 
		className={classNames("blt-icon", className)}
		width="66" 
		height="66" 
		viewBox="0 0 66 66" 
		fill="none"
	>
		{title && <title>{title}</title>}

		<path 
			fillRule="evenodd" 
			clipRule="evenodd" 
			d="M4 0C1.79086 0 0 1.79086 0 4V62C0 64.2091 1.79086 66 4 66H62C64.2091 66 66 64.2091 66 62V4C66 1.79086 64.2091 0 62 0H4ZM2 4C2 2.89543 2.89543 2 4 2H62C63.1046 2 64 2.89543 64 4V62C64 63.1046 63.1046 64 62 64H4C2.89543 64 2 63.1046 2 62V4ZM44.7071 23.7071C45.0976 23.3166 45.0976 22.6834 44.7071 22.2929C44.3166 21.9024 43.6834 21.9024 43.2929 22.2929L22.2929 43.2929C21.9024 43.6834 21.9024 44.3166 22.2929 44.7071C22.6834 45.0976 23.3166 45.0976 23.7071 44.7071L44.7071 23.7071Z" 
			fill={color}
		/>
	</svg>
)

export default NoImage