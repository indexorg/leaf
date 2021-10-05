import React from 'react'
import classNames from 'classnames'

const DragHandle = ({
	className = [],
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		fill="none"
		height="8" 
		width="13" 
		viewBox="0 0 13 8"
	>
		{title && <title>{title}</title>}

		<path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H12.5C12.7761 0.5 13 0.723858 13 1C13 1.27614 12.7761 1.5 12.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="#6F7F86"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 3.72386 0.223858 3.5 0.5 3.5H12.5C12.7761 3.5 13 3.72386 13 4C13 4.27614 12.7761 4.5 12.5 4.5H0.5C0.223858 4.5 0 4.27614 0 4Z" fill="#6F7F86"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M0 7C0 6.72386 0.223858 6.5 0.5 6.5H12.5C12.7761 6.5 13 6.72386 13 7C13 7.27614 12.7761 7.5 12.5 7.5H0.5C0.223858 7.5 0 7.27614 0 7Z" fill="#6F7F86"/>
	</svg>
)

export default DragHandle
