import React from 'react'

import {
    Routes, 
    Route
} from "react-router-dom"

const ScreensViews = ({
    children
}) => {
    return(
        <Routes>
            {
                [].concat(children).map((c, index) => {
                    console.log(c.props.path)
                    return(
                        <Route
                        key={index}
                        exact
                        path={c.props.path}
                        element={c} />
                    )
                })
            }
        </Routes>
    )
}

export default ScreensViews