import React from 'react'
import {Switch, Route} from "react-router-dom"

// Components
import ScreensPage from '../ScreensPage/ScreensPage'

const ScreensViews = ({
    children
}) => {
    return(
        <Switch>
            {[].concat(children).map((c, index) => {
                return(
                    <Route
                    key={index}
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