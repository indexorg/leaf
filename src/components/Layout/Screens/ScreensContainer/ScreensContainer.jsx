import React, {useEffect, useState} from 'react'

import {
    HashRouter,
} from "react-router-dom"

// Styles
import {Element} from './ScreensContainer.styles.js'

const ScreenContainer = ({
    children,
    layout = 'sidebar',
}) => {
    const [minHeight, setMinHeight] = useState('100vh')

    useEffect(() => {
        if(document.getElementById('adminmenuwrap')) {
            const height = document.getElementById('adminmenuwrap').getBoundingClientRect().height

            if(height > document.body.getBoundingClientRect().height) {
                setMinHeight(`${height}px`)
            }
        }
    }, [])

    return(
        <HashRouter
        >
            <Element
            css={{
                minHeight: `${minHeight}`
            }}>
                {children}
            </Element>
        </HashRouter>
    )
}

export default ScreenContainer