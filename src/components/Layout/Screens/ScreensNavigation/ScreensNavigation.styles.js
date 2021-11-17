import { styled } from '@config/stitches'

export const Footer = styled('nav', {
    marginTop: 'auto',
})

export const Navigation = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    padding: '$16 $10 $8',
    position: 'absolute',
    height: '100%',
    top: 0,
    width: '$80',

    '&:before': {
        backgroundColor: '$black300',
        content: '',
        opacity: .8,
        position: 'absolute',
        inset: '$0',
        zIndex: -1,
    }
})