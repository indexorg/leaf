import {styled} from '@config/stitches'

export const Wrapper = styled('div', {
	display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '$2',
    paddingY: '$2',
    transition: 'all .175s ease',
})

export const SelectWrapper = styled('div', {
	position: 'relative'
})

export const IconWrapper = styled('div', {
	marginTop: -1,
	right: '$3',
	pointerEvents: 'none',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	zIndex: 1,

	'& path': {
		fill: '$black800'
	}
})

export const Element = styled('select', {
	appearance: 'none',
	backgroundImage: 'none !important',
	backgroundColor: "$black000 !important",
	border: '1px solid $black200 !important',
	borderRadius: '$md !important',
	boxShadow: '0 1px 4px rgba(35, 40, 45, 0.08) !important',
	color: '$black900 !important',
	display: 'block',
	fontSize: '$text600 !important',
	fontWeight: 500,
	height: '$9',
	minHeight: '$9',
	flex: 1,
	margin: 0,
	paddingY: 0,
	paddingLeft: '$3',
	paddingRight: '$8',
	maxWidth: 'unset !important',
	minWidth: 'unset',
	position: 'relative',
	textShadow: 'none !important',
	width: '100%',
	zIndex: 1,

	'&:hover': {
		color: '$black900 !important',
    },

	'&:focus': {
        border: '1px solid rgba(34, 113, 177, 0.5) !important',
        boxShadow: '0 1px 4px rgba(34, 113, 177, 0.22) !important',
		color: '$black900 !important',
        outline: 'none',
    },

	variants: {
        isDisabled: {
            true: {
				cursor: 'not-allowed',
                opacity: .5,

				[`& + ${IconWrapper}`]: {
					opacity: .5,
				}
            }
        },
    },

	'.dark &': {
        // backgroundColor: '$black100 !important',
        borderColor: '$black300 !important',
        boxShadow: 'none',
    },

        '.dark &:focus': {
            border: '1px solid rgba(34, 113, 177, 0.5) !important',
            boxShadow: 'none !important',
            outline: 'none',
        },

	'@md': {
		fontSize: '$text300 !important',
	}
})

