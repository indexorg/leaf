import {styled} from '@config/stitches'

export const Wrapper = styled('div', {
	display: 'inline-block',
	position: 'relative'
})

export const Element = styled('select', {
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

export const IconWrapper = styled('div', {
	right: '$3',
	pointerEvents: 'none',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	zIndex: 1,
})