import {styled} from '@stitches/react'

export const Element = styled('div', {
    bottom: '$8',
    left: '50%',
    position: 'fixed',
    transform: 'translateX(-50%)',
    transition: 'all 150ms ease',
    zIndex: 1001,

    '& span': {
        backgroundColor: '$black900',
        borderRadius: '$md',
        boxShadow: '$md',
        color: '$black000',
        display: 'block',
        fontSize: '$text300',
        padding: '$4 $6',
        transition: 'all 150ms cubic-bezier(0.19, 1, 0.22, 1)',
    },

    '.dark & span': {
        backgroundColor: '$black200',
        color: '$black900',
    },

    variants: {
        visible: {
            true: {
                opacity: 1,
                visibility: 'visible',

                '& span': {
                    transform: 'scale(1)'
                }
            },
            false: {
                opacity: 0,
                visibility: 'invisible',

                '& span': {
                    transform: 'scale(.75)'
                }
            }
        }
    }
})