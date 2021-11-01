import React from 'react'

// components
import {Text} from '@components/Layout'

// Styles
import {
    Footer,
    Navigation
} from './ScreensNavigation.styles.js'

const ScreensNavigation = ({
    children,
    footer = null,
    title = false,
}) => {
    return(
        <Navigation>
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

            {children}

            {footer && <Footer>{footer}</Footer>}
        </Navigation>
    )
}

export default ScreensNavigation