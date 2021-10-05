import React from 'react'
import classNames from 'classnames'

const Profile = ({
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
	>
		{title && <title>{title}</title>}

		<path 
			fillRule="evenodd" 
			clipRule="evenodd" 
			d="M14.1992 11.2543C10.767 8.58196 5.23304 8.58186 1.80086 11.2543C1.28942 10.2821 1 9.17484 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.17482 14.7106 10.282 14.1992 11.2543ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.8913 2.5C6.57062 2.5 5.5 3.57062 5.5 4.8913V5.5C5.5 6.88071 6.61929 8 8 8C9.38071 8 10.5 6.88071 10.5 5.5V4.8913C10.5 3.57062 9.42938 2.5 8.1087 2.5H7.8913Z" 
			fill={color} />
	</svg>
)

export default Profile