import React from 'react'

// Components
import {Stack, Text} from '@components/Layout'

// Styles
import {
    Content,
    Element,
} from './ScreensPage.styles.js'


const ScreensPage = ({
    actions = null,
    children = null,
    title = false,
}) => (
    <Element>
        <Stack
        align="center">
            {title &&
                <Text
                key="_ndx_title"
                size="title">
                    {title}
                </Text>
            }

            {actions && 
                <Stack
                gap={12}
                css={{
                    marginLeft: 'auto'
                }}>
                    {actions}
                </Stack>
            }
        </Stack>

        <Content>
            {children}
        </Content>
    </Element>
)

export default ScreensPage