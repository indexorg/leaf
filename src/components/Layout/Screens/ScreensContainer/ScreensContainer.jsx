import React from 'react'

import {
    HashRouter as Router,
} from "react-router-dom"

// Styles
import {Element} from './ScreensContainer.styles.js'

const ScreenContainer = ({
    children,
    layout = 'sidebar',
}) => {
    return(
        <Router>
            <Element
            layout={layout}>
                {children}
            </Element>
        </Router>
    )
}

export default ScreenContainer