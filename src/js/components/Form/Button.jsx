import React from 'react'

import { 
    styled
} from '../../config/stitches';

const ButtonElement = styled('button', {
    alignItems: 'center', 
    borderRadius: '$md',
    display: 'inline-flex',
    fontSize: '$text300',
    fontWeight: 500,
    height: '$9',
    justifyContent: 'center',
    paddingY: '$2-5',
    paddingX: '$3',
    transition: 'all .1s ease',

    '&:active': {
        opacity: .7
    },
    '&:focus': {
        outline: 'none',
    },
    '&:hover': {
        opacity: .7
    },

    '@md': {
        height: "$10",
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
                border: '1px solid $black900',
                background: 'transparent',
                color: '$black900'

                // focus-visible:bg-black
                // focus-visible:bg-opacity-10
            },
            primary: {
                border: '1px solid $primary400',
                background: '$primary400',
                color: '$white'
                

                // focus-visible:ring-primary
                // focus-visible:ring-offset-1
            },
            warning: {
                border: '1px solid $warning400',
                background: 'transparent',
                color: '$warning400'

                // focus-visible:bg-warning
                // focus-visible:bg-opacity-10
            },
            simple: {
                background: 'transparent',
                border: 'none',
                color: '$text900',
                // focus-visible:ring-black-600
            }
        }
    }
})

const Button = ({
    children,
    css = {},
    disabled = false,
    onClick = undefined,
    variant = 'normal',
    size = 'normal',
    title = '',
}) => {
    return(
        <ButtonElement
        css={css}
        size={size}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        title={title}>
            {children}
        </ButtonElement>
    )
}

export default Button