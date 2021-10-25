import React from 'react'

import {
    HashRouter as Router,
  } from "react-router-dom"

// Styles
import {Element} from './ScreensContainer.styles.js'

const ScreenContainer = ({
    children
}) => {
    return(
        <Router>
            <Element>
                {children}
            </Element>
        </Router>
    )
}

export default ScreenContainer