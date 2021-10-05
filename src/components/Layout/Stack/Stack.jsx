import React from 'react'

import {
    Element 
} from './Stack.styles.js'

const Stack = ({
    align = "leading",
    children,
    css = {},
    direction = 'horizontal',
    gap = 0,
}) => (
    <Element
    css={{
        gap: gap,
        ...css
    }}
    align={align}
    direction={direction}>
        {children}
    </Element>
)

export default Stack