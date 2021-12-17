import React from 'react'

import ScreensPage from '../ScreensPage/ScreensPage'

import {
    Routes, 
    Route
} from "react-router-dom"

// Styles
import {Element} from './ScreensViews.styles.js'

const ScreensViews = ({
    children
}) => {
    return(
        <Element>
            <Routes>
                {
                    [].concat(children).map((c, index) => {
                        return(
                            <Route
                            key={index}
                            exact
                            path={c.props.path}
                            element={
                                <ScreensPage
                                title={c.props.title}
                                actions={c.props.actions}>
                                    {c.props.children}
                                </ScreensPage>
                            } />
                        )
                    })
                }
            </Routes>
        </Element>
    )
}

export default ScreensViews