import { styled } from '@config/stitches'

export const Item = styled('li', {
    alignItems: 'center',
    border: '1px solid $black310',
    display: 'flex',
    height: '$9',
    marginBottom: -1,
    marginRight: -1,
    paddingX: '$4-5',

    '&:first-child': {
        borderRadius: '$md 0 0 0',
    },

    '&:last-child': {
        borderRadius: '0 $md 0 0',
    },

    variants: {
        active: {
            true: {
                backgroundColor: '$black300'
            }
        }
    }
})