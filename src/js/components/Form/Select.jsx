import React from 'react'
import { 
    styled
} from '../../config/stitches';

import Icon from '../Icon'

const SelectWrapper = styled('div', {
	display: 'inline-block',
	position: 'relative'
})

const SelectElement = styled('select', {
	appearance: 'none',
	background: 'none',
	backgroundColor: '$black300',
	border: 'none',
	borderRadius: '$md',
	color: '$black900',
	display: 'block',
	fontWeight: 500,
	boxShadow: 'none',
	height: '$9',
	margin: 0,
	paddingY: 0,
	paddingLeft: '$3',
	paddingRight: '$8',
	minWidth: 'unset',
	position: 'relative',
	fontSize: '$text300',
	width: 'auto',
	zIndex: 1,

	'&:focus': {
		backgroundColor: '$black310',
		color: "$primary400",
		outline: 'none',
	},
})

const SelectIcon = styled('div', {
	right: '$3',
	pointerEvents: 'none',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	zIndex: 1,
})

const Select = ({
	options = [],
	onChange = undefined,
	selected = null,
	css = {},
}) => {
	return(
		<SelectWrapper
		css={css}>
			<SelectElement
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
			</SelectElement>

			<SelectIcon>
				<Icon.ArrowDown color="#23282D" />
			</SelectIcon>
		</SelectWrapper >
	)
}

export default Select