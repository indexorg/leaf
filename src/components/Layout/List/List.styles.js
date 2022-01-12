import { styled } from '@config/stitches'

export const Item = styled('div', {
    alignItems: 'center',
    borderBottom: '1px solid $black100',
    display: 'flex',
    fontSize: '$text400',
    fontWeight: 500,
    margin: 0,
    padding: '$2 0',
    width: '$full',
    
    '.dark &': {
        borderBottom: '1px solid $black000',
    },

    '&:last-child': {
        borderBottom: 0
    },

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

