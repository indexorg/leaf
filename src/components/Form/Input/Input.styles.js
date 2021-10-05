import { 
    styled
} from '@config/stitches';


export const Wrapper = styled('div', {
    alignItems: 'center',
    backgroundColor: "$white",
    borderRadius: '$md',
    border: '2px solid $black300',
    cursor: 'text',
    display: 'inline-flex',
    gap: '$2',
    paddingX: '$3',
    paddingY: '$1.5',
    transition: 'colors .1s ease',
    variants: {
        invalid: {
            true: {
                backgroundColorRGBA: '#d63638|.1',
                // backgroundColor: ColorWithOpacity('$warning400', .1),
                color: '$warning400',
                border: '2px solid $warning400',
            }
        },
        focused: {
            true: {
                border: '2px solid $black310',
            }
        },
    }
})

export const Element = styled('input', {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
    cursor: 'text',
    color: '$black900',
    fontSize: '$text300',
    height: '$9',
    margin: 0,
    padding: 0,

    '&:focus': {
        outline: 'none',
    }
})