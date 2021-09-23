import React, {useEffect, useState, useCallback} from 'react'
import _throttle from 'lodash/debounce'

import Color from '../Color'
import Input from '../Layout/Input'
import View from '../Layout/View'

const Search = (props) => {
	const {
		icon = false,
		onChange,
		handleFocus,
		placeholder = "Search...",
		value,
	} = props
	
	return(
		<React.Fragment>
			<Input
			background={Color('Gray').opacity(.6)}
			padding={{
				horizontal: 12,
			}}
			placeholder={placeholder}
			radius={8}
			type="text"
			{...props}
			onChange={onChange}
			handleFocus={handleFocus}
			value={value} />

			{icon && <View
				frame={{
					width: 17,
				}}
				edges={{
					leading: 21,
				}}
			>
				{icon}
			</View>}
		</React.Fragment>
	)
}

export default Search