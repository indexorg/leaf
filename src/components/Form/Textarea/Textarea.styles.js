import { 
    styled
} from '@config/stitches';


export const Wrapper = styled('div', {
    alignItems: 'flex-start',
    backgroundColor: "$white",
    borderRadius: '$md',
    border: '1px solid $black300',
    boxShadow: '0 1px 4px rgba(35, 40, 45, 0.08)',
    cursor: 'text',
    display: 'inline-flex',
    gap: '$2',
    padding: '$3',
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
                border: '1px solid rgba(34, 113, 177, 0.5)',
                boxShadow: '0 1px 4px rgba(34, 113, 177, 0.22)',
            }
        },
    }
})

export const Element = styled('textarea', {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
    cursor: 'text',
    color: '$black900',
    fontSize: '$text300',
    height: '$16',
    margin: 0,
    padding: 0,

    '&:focus': {
        outline: 'none',
    },

    variants: {
        resizeable: {
            true: {
                resize: 'both'
            },
            false: {
                resize: 'none'
            }
        }
    }
})