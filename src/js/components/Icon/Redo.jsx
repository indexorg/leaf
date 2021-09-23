import React from 'react'
import classNames from 'classnames'

const Redo = ({
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
			d="M10.959 0.469671C10.6661 0.762564 10.6661 1.23744 10.959 1.53033L13.8787 4.44999H4.68935C2.61828 4.44999 0.939338 6.12893 0.939338 8.2C0.939338 10.2711 2.61828 11.95 4.68935 11.95H5.68934C6.10355 11.95 6.43934 11.6142 6.43934 11.2C6.43934 10.7858 6.10355 10.45 5.68934 10.45H4.68935C3.4467 10.45 2.43934 9.44265 2.43934 8.2C2.43934 6.95735 3.4467 5.94999 4.68935 5.94999H13.8787L10.959 8.86966C10.6661 9.16255 10.6661 9.63743 10.959 9.93032C11.2519 10.2232 11.7268 10.2232 12.0197 9.93032L16.75 5.19999L12.0197 0.469669C11.7268 0.176776 11.2519 0.176777 10.959 0.469671Z" 
			fill={color} />
	</svg>

)

export default Redo