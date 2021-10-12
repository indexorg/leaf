import React from 'react'

import {
    Item 
} from './GridItem.styles.js'

const GridItem = ({
    children
}) => (
    <Item>
        {children}
    </Item>
)

export default GridItem