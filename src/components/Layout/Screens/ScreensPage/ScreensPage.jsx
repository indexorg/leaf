import React from 'react'

// Components
import {Text} from '@components/Layout'

// Styles
import {
    Content,
    Element,
} from './ScreensPage.styles.js'

const ScreensPage = ({
    children = null,
    title = false,
}) => (
    <Element>
        {title &&
            <Text
            size="title">
                {title}
            </Text>
        }

        <Content>
            {children}
        </Content>
    </Element>
)

export default ScreensPage