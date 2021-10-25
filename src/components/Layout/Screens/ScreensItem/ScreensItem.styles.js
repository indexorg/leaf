import { styled } from '@config/stitches'

export const Icon = styled('span', {
    color: '$black500',
    opacity: .6,

})

export const ElementWrapper = styled('div', {
    '& a': {
        textDecoration: 'none',
    }
})

export const Element = styled('span', {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '$md',
    display: 'flex',
    gap: '$3',
    height: '$11',
    marginX: '-$4',
    marginY: '$1',
    paddingX: '$4',
    textAlign: 'left',
    transition: 'all .15s ease',

    variants: {
        active: {
            true: {
                backgroundColor: '$black100',
                color: '$primary400',

                [`& ${Icon}`]: {
                    color: '$primary400',
                    opacity: 1,
                },

                '&:hover': {
                    backgroundColor: '$black100',
                }
            },
            false: {
                color: '$black900'
            }
        }
    },

    '&:hover': {
        backgroundColor: '$black310',
    }
})