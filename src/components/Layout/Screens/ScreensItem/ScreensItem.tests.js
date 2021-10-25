import React from 'react'

// Contexts
import {TabContext} from '@utils/contexts/tab.context.js'

const TabItem = ({
    children
}) => {
    return(
        <TabContext.Consumer>
            {({active}) =>
                {children}
            }
        </TabContext.Consumer>
    )
}

export default TabItem