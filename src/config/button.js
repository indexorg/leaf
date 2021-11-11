export const buttonStyles = {
    appearance: 'none',
    '-webkit-appearance': 'none',
    alignItems: 'center', 
    borderRadius: '$md',
    display: 'inline-flex',
    cursor: 'pointer',
    fontFamily: '$body',
    fontSize: '$text300',
    fontWeight: 600,
    height: '$10',
    justifyContent: 'center',
    paddingY: '$2-5',
    paddingX: '$3',
    textAlign: 'left',
    transition: 'all 125ms ease',

    '&:focus': {
        outline: 'none',
    },

    '@md': {
        height: "$9",
        paddingX: '$6'
    },

    variants: {
        size: {
            small: {
                height: '$7',
                paddingY: '$1-5',
                paddingX: '$2-5',

                '@md': {
                    height: "$8",
                },
            },
            tiny: {
                fontSize: '$text200',
                height: '$6',
                paddingY: '$0-5',
                paddingX: '$1-5',

                '@md': {
                    height: "$7",
                },
            }
        },

        variant: {
            normal: {
                border: '0',
                backgroundColor: '$black300',
                color: '$black900',

                '&:hover': {
                    background: '$black310',
                },

                // focus-visible:bg-black
                // focus-visible:bg-opacity-10
            },
            primary: {
                border: '1px solid $primary400',
                background: '$primary400',
                color: '$white',

                '&:hover': {
                    background: '$primary410',
                },
            
            },
            warning: {
                border: '1px solid $warning400',
                background: 'transparent',
                color: '$warning400',

                '&:hover': {
                    background: '$warning400',
                    color: '$white'
                },
            },
            simple: {
                background: 'transparent',
                border: 'none',
                color: '$text900',
            },
            plain: {
                background: 'transparent',
                border: 'none',
                color: '$text900',
                padding: 0,
            }
        }
    }
}