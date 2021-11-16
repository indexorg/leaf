import React from 'react'

import {
    Container 
} from './GridContainer.styles.js'

const GridContainer = ({
    children,
    columns = 3,
    css = {},
    gap = '$6',
}) => (
    <Container
    css={{
        gridTemplateColumns: `repeat(1, 1fr)`,
        gridGap: gap,
        '@md': {
            gridTemplateColumns: `repeat(${columns > 4 ? Math.floor(columns / 2) : columns}, 1fr)`,
        },
        '@lg': {
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
        },
        ...css
    }}>
        {children}
    </Container>
)

export default GridContainer