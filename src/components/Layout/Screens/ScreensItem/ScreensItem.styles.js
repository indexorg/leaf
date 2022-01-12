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
    marginX: '-$2',
    marginY: '$1',
    paddingX: '$4',
    textAlign: 'left',
    transition: 'all .15s ease',

    '@md': {
        marginX: '-$4',
    },

    variants: {
        active: {
            true: {
                '&': {
                    backgroundColor: '$black100',
                    color: '$blue400',
                },

               

                [`& ${Icon}`]: {
                    color: '$blue400',
                    opacity: 1,
                },

                '&:hover': {
                    backgroundColor: '$black100',
                },

                '.dark &:hover': {
                    backgroundColor: '$black100',
                },
            },
            false: {
                color: '$black900',

            }
        }
    },

    '&:hover': {
        backgroundColor: '$black210',
    },

    '.dark &:hover': {
        backgroundColor: '$black100',
    },
})