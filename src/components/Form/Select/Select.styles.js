import {styled} from '@config/stitches'

export const Wrapper = styled('div', {
	display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '$2',
    paddingY: '$2',
    transition: 'all .175s ease',
    // variants: {
    //     invalid: {
    //         true: {
    //             backgroundColorRGBA: '#d63638|.1',
    //             // backgroundColor: ColorWithOpacity('$warning400', .1),
    //             color: '$warning400',
    //             border: '1px solid $warning400',
    //         }
    //     },
    // }
})

export const SelectWrapper = styled('div', {
	position: 'relative'
})

export const Element = styled('select', {
	appearance: 'none',
	backgroundColor: "$white",
	border: '1px solid $black300',
	borderRadius: '$md',
	boxShadow: '0 1px 4px rgba(35, 40, 45, 0.08)',
	color: '$black900',
	display: 'block',
	fontWeight: 500,
	height: '$9',
	minHeight: '$9',
	flex: 1,
	margin: 0,
	paddingY: 0,
	paddingLeft: '$3',
	paddingRight: '$8',
	minWidth: 'unset',
	position: 'relative',
	fontSize: '$text300',
	width: '100%',
	zIndex: 1,

	'&:focus': {
        border: '1px solid rgba(34, 113, 177, 0.5)',
        boxShadow: '0 1px 4px rgba(34, 113, 177, 0.22)',
        outline: 'none',
    },
})

export const IconWrapper = styled('div', {
	marginTop: '-$0-5',
	right: '$3',
	pointerEvents: 'none',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	zIndex: 1,
})