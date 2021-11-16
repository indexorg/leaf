import React from 'react'

import {
    Item 
} from './GridItem.styles.js'

const GridItem = ({
    children,
    css = {},
}) => (
    <Item
    css={css}>
        {children}
    </Item>
)

export default GridItem