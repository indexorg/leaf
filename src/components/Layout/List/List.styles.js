import { styled } from '@config/stitches'

export const Item = styled('div', {
    alignItems: 'center',
    borderBottom: '1px solid $black300',
    display: 'flex',
    fontSize: '$text400',
    fontWeight: 500,
    margin: 0,
    height: '$12',
    width: '$full',
    
    '&:last-child': {
        borderBottom: 0
    },

    '@md': {
        height: '$11'
    }
})

export const Container = styled('div', {
    variants: {
        padded: {
            true: {
                [`& ${Item}`]: {
                    paddingX: '$3'
                },
            }
        },
        scroll: {
            true: {
                overflow: 'scroll',
                marginRight: '-$3',
                paddingRight: '$3'
            }
        }
    }
})  

