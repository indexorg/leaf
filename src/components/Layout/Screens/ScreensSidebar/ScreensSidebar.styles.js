import { styled } from '@config/stitches'

export const Sidebar = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    padding: '$16 $10',
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