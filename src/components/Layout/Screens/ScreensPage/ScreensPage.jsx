import React from 'react'

// Components
import {Text} from '@components/Layout'

// Styles
import {
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
        {children}
    </Element>
)

export default ScreensPage