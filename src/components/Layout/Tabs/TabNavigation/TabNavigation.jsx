import React from 'react'

// Styles
import {
    Navigation
} from './TabNavigation.styles.js'

import Tab from '../Tab/Tab'

const TabNavigation = ({
    children
}) => {
    return(
        <Navigation>
            {
                children
            }
        </Navigation>
    )
}

export default TabNavigation