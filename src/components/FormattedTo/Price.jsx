import React from 'react'

const Price = ({
	format = 'us',
	value = '',
}) => {
	const intValue = parseInt(value).toFixed(2);

	if(format == 'eur') {
		return(
			<React.Fragment>
				{intValue.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
			</React.Fragment>
		)
	} else {
		return(
			<React.Fragment>
				{intValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
			</React.Fragment>
		)
	}
}

export default Price