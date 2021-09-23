import React from 'react'

const Image = ({value = '', className}) => {
	return(
		<img 
		className={className}
		src={value} />
	)
}

export default Image