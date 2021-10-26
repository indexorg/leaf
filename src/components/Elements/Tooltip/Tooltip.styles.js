import {styled} from '@stitches/react'

export const Element = styled('div', {

})

export const Content = styled('span', {
    backgroundColor: '$black300',
    borderRadius: '$md',
    display: 'block',
    marginRight: '$2',
    padding: '$2',
    position: 'absolute',
    right: '100%',
    transition: 'all 750ms ease',
    top: '-$2',
    width: '$40',
    zIndex: -1,
    
    variants: {
        visible: {
            true: {
                opacity: 1,
                visibility: 'visible'
            },
            false: {
                opacity: 0,
                visibility: 'invisible'
            }
        }
    }
})