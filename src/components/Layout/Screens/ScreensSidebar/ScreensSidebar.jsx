import React from 'react'

// components
import {Text} from '@components/Layout'

// Styles
import {
    Sidebar
} from './ScreensSidebar.styles.js'

const ScreensSidebar = ({
    children,
    title = false,
}) => {
    return(
        <Sidebar>
            {title &&
                <Text
                size="subheading"
                weight="bold"
                css={{
                    paddingBottom: '$7'
                }}>
                    {title}
                </Text>
            }

            {
                children
            }
        </Sidebar>
    )
}

export default ScreensSidebar