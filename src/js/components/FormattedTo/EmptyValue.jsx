import React from 'react'

const EmptyValue = ({
	width = false,
}) => (
	<div
	className={`
		bg-black-600
		bg-opacity-50
		h-px
	`}
	style={{ 
		width: width ? width + 'px' : '25%', 
	}}></div>
)

export default EmptyValue