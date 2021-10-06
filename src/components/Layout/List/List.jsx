import React from 'react'

import {
    Container,
    Item,
} from './List.styles.js'

export const List = ({
    children,
    css = {},
    padded = false
}) => {
    return (
        <Container
        css={css}
        padded={padded}>
            {children}
        </Container>
    )
}

export const ListItem = ({
    children,
    css,
    dir = 'ltr'
}) => (
    <Item
    css={css}
    dir={dir}>
        {children}
    </Item>
)