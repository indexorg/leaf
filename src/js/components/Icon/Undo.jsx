import React from 'react'
import classNames from 'classnames'

const Undo = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		width="17" 
		height="12" 
		viewBox="0 0 17 12" 
		fill="none"
	>
		{title && <title>{title}</title>}

		<path 
			fillRule="evenodd" 
			clipRule="evenodd" 
			d="M6.73032 0.469671C7.02322 0.762564 7.02322 1.23744 6.73032 1.53033L3.81066 4.44999H13C15.0711 4.44999 16.75 6.12893 16.75 8.2C16.75 10.2711 15.0711 11.95 13 11.95H12C11.5858 11.95 11.25 11.6142 11.25 11.2C11.25 10.7858 11.5858 10.45 12 10.45H13C14.2426 10.45 15.25 9.44265 15.25 8.2C15.25 6.95735 14.2426 5.94999 13 5.94999H3.81065L6.73032 8.86966C7.02322 9.16255 7.02322 9.63743 6.73032 9.93032C6.43743 10.2232 5.96256 10.2232 5.66966 9.93032L0.939331 5.19999L5.66966 0.469669C5.96256 0.176776 6.43743 0.176777 6.73032 0.469671Z" 
			fill={color} />
	</svg>

)

export default Undo
