import React from 'react'
import {Switch, Route} from "react-router-dom"

// Components
import ScreensPage from '../ScreensPage/ScreensPage'

const ScreensViews = ({
    children
}) => {
    return(
        <Switch>
            {children.map(c => {
                return(
                    <Route
                    exact
                    path={c.props.path}
                    component={() => <ScreensPage {...c.props} />} />
                )
            }
            )}
        </Switch>
    )
}

export default ScreensViews