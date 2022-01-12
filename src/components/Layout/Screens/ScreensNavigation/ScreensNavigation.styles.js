import { styled } from '@config/stitches'

export const Footer = styled('nav', {
    marginTop: 'auto',
})

export const Navigation = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    padding: '$10 $5',
    position: 'relative',
    
    top: 0,
    

        '@md': {
            height: '100%',
            padding: '$16 $10 $8',
            position: 'absolute',
            width: '$80',
        },

    '&:before': {
        backgroundColor: '$black200',
        content: '',
        opacity: .8,
        position: 'absolute',
        inset: '$0',
        zIndex: -1,
    },

    '.dark &:before': {
        backgroundColor: '$black',
        opacity: .15,
    },

    
})