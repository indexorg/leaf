export const buttonStyles = {
    appearance: 'none',
    '-webkit-appearance': 'none',
    alignItems: 'center', 
    borderRadius: '$md',
    border: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    cursor: 'pointer',
    fontFamily: '$body',
    fontSize: '$text300',
    fontWeight: 600,
    height: '$10',
    justifyContent: 'center',
    lineHeight: 1,
    paddingY: '$2-5',
    paddingX: '$3',
    textAlign: 'left',
    textDecoration: 'none',
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
                backgroundColor: '$black200',
                color: '$black800',

                '&:hover': {
                    background: '$black210',
                    color: '$black800',
                },

                '.dark &': {
                    backgroundColor: '$black100',
                    color: '$black900',
                },
            },
            primary: {
                background: '$blue400',
                color: '#FFFFFF',

                '&:hover': {
                    background: '$blue410',
                    color: '#FFFFFF',
                },
            
            },
            warning: {
                background: 'transparent',
                color: '$red400',

                '&:hover': {
                    background: '$red400',
                    color: '$black000'
                },
            },
            simple: {
                background: 'transparent',
                color: '$text900',
            },
            plain: {
                background: 'transparent',
                color: '$text900',
                padding: 0,
            }
        }
    }
}