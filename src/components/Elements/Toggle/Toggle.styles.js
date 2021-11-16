import {styled} from '@config/stitches'

export const Element = styled('button', {
    display: 'block',
    backgroundColor: 'transparent',
    border: '2px solid $black600',
    borderRadius: '9999px',
    color: 'transparent',
    cursor: 'pointer',
    height: '$5',
    position: 'relative',
    transition: 'background-color .3s cubic-bezier(0.19, 1, 0.22, 1)',
    width: '$9',
    
    variants: {
        enabled: {
            true: {
                backgroundColor: '$primary400',
                border: '2px solid $primary400',
            }
        }
    },

    '&:hover': {
        color: 'transparent'
    }
})

export const Control = styled('span', {
    backgroundColor: '$black600',
    borderRadius: '100%',
    display: 'block',
    height: '$3',
    left: '$0-5',
    position: 'absolute',
    top: '50%',
    transition: 'transform 300ms ease',
    transform: 'translateX(0) translateY(-50%)',
    width: '$3',
	
    variants: {
        enabled: {
            true: {
                backgroundColor: '$white',
                transform: 'translateX(16px) translateY(-50%)',
            }
        }
    },
})