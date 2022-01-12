import { styled } from '@config/stitches'

export const Element = styled('div', {
    position: 'relative',

    '@md': {
        left: '$80',
        width: 'calc(100% - $80)',
    }
})