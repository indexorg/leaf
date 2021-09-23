import React from 'react'

const Input = ({
	type="text",
	onChange = undefined,
	placeholder = "Enter text here...",
	value = '',
}) => (
	<input 
	className="blt-control__input"
	onChange={e => {
		onChange && onChange(e.target.value)
	}}
	placeholder={placeholder}
	type={type}
	value={value} />
)

export default Input