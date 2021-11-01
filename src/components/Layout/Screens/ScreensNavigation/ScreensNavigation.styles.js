import { styled } from '@config/stitches'

export const Footer = styled('nav', {
    marginTop: 'auto',
})

export const Navigation = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    padding: '$16 $10 $8',
    position: 'relative',

    '&:before': {
        backgroundColor: '$black300',
        content: '',
        opacity: .8,
        position: 'absolute',
        inset: '$0',
        zIndex: -1,
    }
})