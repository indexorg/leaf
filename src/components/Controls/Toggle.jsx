import React, {useEffect, useState} from 'react'
import classNames from 'classnames'
import update from 'immutability-helper'

const Toggle = ({
	onChange,
	value,
}) => {
	return(
		<a 
		className={classNames("blt-control__toggle", {
			"isActive": value == 1
		})}
		href="#" 
		onClick={e => {
			e.preventDefault();

			onChange(!value)
		}}>
			{value ? 'on' : 'off'}
		</a>
	)
}

export default Toggle