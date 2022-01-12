import { 
    styled
} from '@config/stitches';


export const Wrapper = styled('div', {
    cursor: 'text',
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    paddingY: '$2',
    transition: 'colors .1s ease',
   
})

export const Element = styled('textarea', {
    backgroundColor: "$black000",
    borderRadius: '$md',
    border: '1px solid $black300',
    boxShadow: '0 1px 4px rgba(35, 40, 45, 0.08)',
    cursor: 'text',
    color: '$black900',
    fontSize: '$text300',
    height: '$16',
    margin: 0,
    padding: '$3',

    '&:focus': {
        border: '1px solid rgba(34, 113, 177, 0.5)',
        boxShadow: '0 1px 4px rgba(34, 113, 177, 0.22)',
        outline: 'none',
    },

    variants: {
        hasError: {
            true: {
                backgroundColorRGBA: '#d63638|.1',
                // backgroundColor: ColorWithOpacity('$red400', .1),
                color: '$red400',
                border: '1px solid $red400',
            }
        },
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