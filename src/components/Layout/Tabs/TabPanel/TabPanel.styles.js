import { styled } from '@config/stitches'

export const Panel = styled('div', {
    variants: {
        active: {
            true: {
                display: 'block'
            }, 
            false: {
                display: 'none'
            }
        }
    }
})