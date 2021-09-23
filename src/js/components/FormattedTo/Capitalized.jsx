import React from 'react'

const Capitalized = ({ value = '' }) => <React.Fragment>{value.charAt(0).toUpperCase() + value.slice(1)}</React.Fragment>

export default Capitalized