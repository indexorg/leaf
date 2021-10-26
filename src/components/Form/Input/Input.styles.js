import { 
    styled
} from '@config/stitches';


export const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '$2',
    paddingY: '$2',
    position: 'relative',
    transition: 'all .175s ease',
})

export const Element = styled('input', {
    backgroundColor: "$white",
    border: '1px solid $black300',
    borderRadius: '$md',
    boxShadow: '0 1px 4px rgba(35, 40, 45, 0.08)',
    cursor: 'text',
    color: '$black900',
    fontSize: '$text300',
    height: '$9',
    minHeight: '$9',
    margin: 0,
    paddingX: '$3',
    width: '100%',

    variants: {
        hasError: {
            true: {
                backgroundColorRGBA: '#d63638|.1',
                // backgroundColor: ColorWithOpacity('$warning400', .1),
                color: '$warning400',
                border: '1px solid $warning400',
            }
        },
    },

    '&:focus': {
        border: '1px solid rgba(34, 113, 177, 0.5)',
        boxShadow: '0 1px 4px rgba(34, 113, 177, 0.22)',
        outline: 'none',
    },

    '&:autofill': {
        backgroundColor: '$white !important',
        '-webkit-box-shadow': '0 0 0 30px white inset !important',
        fontWeight: 600,
    },
    '&:-webkit-autofill': {
        backgroundColor: '$white !important',
        '-webkit-box-shadow': '0 0 0 30px white inset !important',
        fontWeight: 600,
    }
})