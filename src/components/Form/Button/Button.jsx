import React from 'react'

import { ButtonElement } from './Button.styles.js'

const Button = React.forwardRef((props, ref) => {
    const {
        children,
        css = {},
        disabled = false,
        href = '',
        onClick = undefined,
        variant = 'normal',
        size = 'normal',
        title = '',
        ...otherProps
    } = props

    return(
        <ButtonElement
        ref={ref}
        as={href !== '' ? 'a' : 'button'}
        css={css}
        size={size}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        title={title}
        href={href}
        {...otherProps}>
            {children}
        </ButtonElement>
    )
})

export default Button