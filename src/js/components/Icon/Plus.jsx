import React from 'react'
import classNames from 'classnames'

const Plus = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		width="16" 
		height="16" 
		viewBox="0 0 16 16" 
		fill="none" 
		style={{ display: 'block' }}
	>
		{title && <title>{title}</title>}

		<path 
			fillRule="evenodd" 
			clipRule="evenodd" 
			d="M12.5962 3.40381C15.1346 5.94221 15.1346 10.0578 12.5962 12.5962C10.0578 15.1346 5.94221 15.1346 3.40381 12.5962C0.865398 10.0578 0.865398 5.94221 3.40381 3.40381C5.94221 0.865398 10.0578 0.865398 12.5962 3.40381ZM13.6569 2.34315C16.781 5.46734 16.781 10.5327 13.6569 13.6569C10.5327 16.781 5.46734 16.781 2.34315 13.6569C-0.781049 10.5327 -0.781049 5.46734 2.34315 2.34315C5.46734 -0.781049 10.5327 -0.781049 13.6569 2.34315ZM8.79013 4.59682C8.79013 4.1826 8.45434 3.84682 8.04013 3.84682C7.62592 3.84682 7.29013 4.1826 7.29013 4.59682V7.29012H4.59683C4.18261 7.29012 3.84683 7.62591 3.84683 8.04012C3.84683 8.45433 4.18261 8.79012 4.59683 8.79012L7.29013 8.79012V11.4834C7.29013 11.8976 7.62592 12.2334 8.04013 12.2334C8.45434 12.2334 8.79013 11.8976 8.79013 11.4834V8.79012L11.4834 8.79012C11.8976 8.79012 12.2334 8.45433 12.2334 8.04012C12.2334 7.62591 11.8976 7.29012 11.4834 7.29012H8.79013V4.59682Z" 
			fill={color} 
		/>
	</svg>
)

export default Plus