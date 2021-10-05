import React from 'react'

import Icon from '@components/Icon'

import {
    Wrapper,
    Element,
    IconWrapper
} from './Select.styles.js'

const Select = ({
	options = [],
	onChange = undefined,
	selected = '',
	css = {},
}) => {
	return(
		<Wrapper
		css={css}>
			<Element
			onChange={e => {
				onChange && onChange(e.target.value)
			}}
			value={selected}>
				{
					options.map(option => (
						<option 
						key={option.value} 
						value={option.value}>
							{option.label}
						</option>

					))
				}
			</Element>

			<IconWrapper>
				<Icon.ArrowDown color="#23282D" />
			</IconWrapper>
		</Wrapper >
	)
}

export default Select