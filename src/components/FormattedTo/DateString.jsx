import React from 'react'
var dayjs = require('dayjs')

const DateString = ({value = ''}) => {
	const date = new dayjs(value).format('MMMM DD, YYYY');
	
	return(
		<React.Fragment>
			{date}
		</React.Fragment>
	)
}

export default DateString