import React from 'react'

import { ButtonElement } from './Button.styles.js'

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