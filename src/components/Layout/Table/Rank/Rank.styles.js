import { styled } from '@config/stitches'

export const RankColumnHandle = styled('span', {
    cursor: 'grab',
    variants: {
        dragging: {
            true: {
                cursor: 'grabbing'
            }
        }
    }
})