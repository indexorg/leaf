import React, {useContext, useEffect, useRef} from 'react'

// Contexts
import {TabContext} from '@utils/contexts/tab.context.js'

import {
    Panel,
} from './TabPanel.styles.js'

const TabPanel = ({
    children
}) => {
    let id = `leaf-tabs-panel-${Math.random()}`

    const [{active, panels}, dispatch] = useContext(TabContext)
    const panelRef = useRef(null)

    useEffect(() => {
        dispatch({
            type: 'ADD_PANEL',
            panel: panelRef
        })
    }, [panelRef])
    
    return(
        <Panel
        id={id}
        ref={panelRef}
        active={panels.indexOf(panelRef) === active}>
            {children}
        </Panel>
    )
}

export default TabPanel