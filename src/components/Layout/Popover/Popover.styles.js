import { styled } from '@config/stitches'

export const PopoverElement = styled('div', {
    position: 'relative',
})

export const PopoverPanel = styled('div', {
    backgroundColor: '$white',
    borderRadius: '$lg',
    boxShadow: '$shallow',
    position: 'absolute',
    padding: '$4',
    opacity: 0,
    transform: 'scale(.75)',
    transition: 'all .3s ease',
    visibility: 'hidden',
    width: '$full',
    zIndex: 100,

    variants: {
        visible: {
            true: {
                opacity: 1,
                transform: 'scale(1)',
                visibility: 'visible',
            }
        }
    }
})