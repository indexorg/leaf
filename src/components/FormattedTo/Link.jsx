import React from 'react'

const Link = ({
	label = '', 
	target = '_self',
	value = '',
}) => <a href={value} target={target}>{label}</a>

export default Link