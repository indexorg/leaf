import React from 'react'

import {
    Container,
    Item,
} from './List.styles.js'

const ListContainer = ({
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

const ListItem = ({
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

export default class List extends React.Component {
	static Container = ListContainer;
	static Item = ListItem;
}
