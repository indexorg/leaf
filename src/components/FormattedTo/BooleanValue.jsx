import React from 'react'

const Boolean = ({
	value = 0,
}) => <React.Fragment>{value ? 'Yes' : 'No'}</React.Fragment>

export default Boolean