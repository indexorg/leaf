import React from 'react'

import {
    HashRouter,
} from "react-router-dom"

// Styles
import {Element} from './ScreensContainer.styles.js'

const ScreenContainer = ({
    children,
    layout = 'sidebar',
}) => {
    return(
        <HashRouter>
            <Element>
                {children}
            </Element>
        </HashRouter>
    )
}

export default ScreenContainer